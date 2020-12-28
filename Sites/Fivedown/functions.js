var errorModal = document.getElementById("error-modal");
var span = document.getElementsByClassName("close")[0];
var errorModalText = document.querySelector("#error-text");
var jsonModal = document.querySelector("#json-modal");
var jsonText = document.querySelector("#json-text");
var jsonPrompt = document.querySelector("#json-prompt");
var getJsonButt = document.querySelector("#json-get");
var setJsonButt = document.querySelector("#json-set");
var submitJson = document.querySelector("#submit-json");
var buttons = document.querySelectorAll(".action");
// When the user clicks on <span> (x), close the errorModal
span.onclick = function () {
  errorModal.style.display = "none";
};

function initializeApp(data) {
  const spreadsheet = document.querySelector("#spreadsheet");
  const newColButt = document.querySelector("#new-column");
  const removeColButt = document.querySelector("#remove-column");
  const newRowButt = document.querySelector("#new-row");
  const fs = require("fs");
  buttons.forEach((b) => {
    b.style.display = "block";
  });

  var parser = new formulaParser.Parser();
  parser.variables = data.variables;

  //?Features
  //TODO Copy and paste rows

  //!BUGS
  //TODO add validation for definitions, ensure you don't have loop from hell and self-assigning
  //TODO name change to null while it has dependents (includes on delete)
  //TODO Pasting in columns can delete all of them.

  var Alts = JSON.parse(data.Alts);
  let Editing = false;

  function showError(message) {
    errorModalText.textContent = message;
    errorModal.style.display = "block";
  }

  var eGridDiv = document.querySelector("#myGrid");
  let Grid = new agGrid.Grid(eGridDiv, {
    rowDragManaged: true,
    animateRows: true,
    rowData: data.rowData,
    columnDefs: data.columnDefs,
    rowSelection: "multiple",
    onCellValueChanged: function (event) {
      if (!Editing) {
        console.log(event.data.definition.split(/\W/));
        let row = event.node.rowIndex,
          column = event.column.colId,
          oldValue = event.oldValue,
          newValue = event.newValue;

        if (column === "name") {
          if (Object.keys(parser.variables).includes(newValue)) {
            showError("That name is already taken");
            Editing = true;
            event.node.setDataValue("name", `${oldValue}`);
            return;
          }
          if (
            parser.parse(newValue).result ||
            parser.parse(newValue).error == "#VALUE!"
          ) {
            showError("No mathematical concepts as names");
            Editing = true;
            event.node.setDataValue("name", `${oldValue}`);
            return;
          }
          let oldData = parser.getVariable(oldValue);
          parser.setVariable(newValue, oldData);
          Editing = true;
          if (oldValue) changeNames(oldValue, newValue);
          autoSaveProgress();
        }

        if (column.includes("alt")) {
          let altIndex = event.column.colId.slice(3);
          if (isNaN(newValue)) {
            showError(
              "Alt is for raw input values only, use definition for formulas"
            );
            event.node.setDataValue(
              "alt" + (altIndex.length > 0 ? altIndex : ""),
              `${oldValue}`
            );
            Editing = true;
            return;
          }
          const variableName = event.data.name;
          if (Alts > 0) {
            let currentAltValues = parser.getVariable(variableName);
            currentAltValues[altIndex ? altIndex : 0] = newValue;
            parser.setVariable(variableName, currentAltValues);
            Editing = true;
            recalculateDependents(variableName, altIndex);
          } else {
            parser.setVariable(variableName, newValue);
            Editing = true;
            recalculateDependents(variableName);
          }
          autoSaveProgress();
        }
        if (column === "definition") {
          if (!oldValue && !newValue) {
            Editing = true;
            return;
          }

          if (!newValue) {
            Editing = true;
            return;
          }

          const variableName = event.data.name;
          const newFormula = newValue;
          let testFormula = newFormula.split(/\W/);

          if (testFormula.includes(variableName)) {
            showError("No self-referencing variables allowed");
            event.node.setDataValue("definition", `${oldValue}`);
            Editing = true;
            return;
          }
          if (parser.parse(newFormula).error) {
            showError("That formula isn't valid");
            event.node.setDataValue("definition", `${oldValue}`);
            Editing = true;
            return;
          }

          if (Alts > 0) {
            let updatedDefinitions = [];
            let currentDefinitions = parser.getVariable(variableName);
            let currentVars = Object.keys(parser.variables);

            currentDefinitions.forEach((def, i) => {
              let tempFormula = newFormula;
              currentVars.forEach((v) => {
                if (tempFormula.includes(v)) {
                  tempFormula = tempFormula.replace(
                    v,
                    parser.getVariable(v)[i]
                  );
                }
              });

              updatedDefinitions.push(parser.parse(tempFormula).result);
              event.node.setDataValue(
                "alt" + (i == 0 ? "" : i),
                `${parser.parse(tempFormula).result}`
              );
              if (variableName) {
                recalculateDependents(variableName, i);
              }
            });
            if (variableName) {
              parser.setVariable(variableName, updatedDefinitions);
            }
          } else {
            let newCalc = parser.parse(newFormula).result;
            if (event.data.name) {
              parser.setVariable(variableName, newCalc);
              recalculateDependents(variableName);
            }
            event.node.setDataValue("alt", `${newCalc}`);
          }
          autoSaveProgress();
        }
      }
    },
    onCellEditingStarted: function (event) {
      if (event.data.definition && event.column.colId.includes("alt")) {
        showError("Cannot have a definition and raw input.");
        Grid.gridOptions.api.stopEditing(true);
        return;
      }
      Editing = false;
    },
    suppressKeyboardEvent: (keypress) => {
      if (!keypress.editing) {
        let isDeleteKey = keypress.event.keyCode === 46;
        if (isDeleteKey) {
          const selectedRows = keypress.api.getSelectedRows();
          Grid.gridOptions.rowData.pop();
          autoSaveProgress();
          Grid.gridOptions.api.applyTransaction({ remove: selectedRows });
          return true;
        }
      }
      return false;
    },
    onPasteStart: (event) => {
      console.log(event);
    },
  });

  newColButt.onclick = function () {
    loadMore();
  };
  newRowButt.onclick = function () {
    addRows();
  };
  removeColButt.onclick = function () {
    removeMore();
  };

  function autoSaveProgress() {
    fs.writeFile(
      "/test.json",
      JSON.stringify({
        rowData: Grid.gridOptions.rowData,
        columnDefs: Grid.gridOptions.columnDefs,
        variables: parser.variables,
        Alts: Alts,
      }),
      function (err) {}
    );
  }

  getJsonButt.onclick = function () {
    submitJson.style.display = "none";
    jsonPrompt.textContent = "This is the current configuration";
    jsonModal.style.display = "block";
    jsonText.value = JSON.stringify({
      variables: parser.variables,
      rowData: Grid.gridOptions.rowData,
      columnDefs: Grid.gridOptions.columnDefs,
    });
  };

  setJsonButt.onclick = function () {
    jsonPrompt.textContent = "Paste and submit your own configuration!";
    jsonModal.style.display = "block";
    submitJson.style.display = "block";
    jsonText.value = "";
  };

  submitJson.onclick = function () {
    let newConfig = JSON.parse(jsonText.value);
    jsonModal.style.display = "none";
    if (!newConfig.variables) {
      showError("The configuration needs a variables object");
      return;
    }
    if (!newConfig.rowData) {
      showError("The configuration needs a rowData array of objects.");
      return;
    }
    if (!newConfig.columnDefs) {
      showError("The configuration needs a columnDefs array of objects.");
      return;
    }
    parser.variables = newConfig.variables;
    Alts = JSON.parse(newConfig.Alts);
    Grid.gridOptions.api.setColumnDefs(newConfig.columnDefs);
    Grid.gridOptions.columnDefs = newConfig.columnDefs;
    Grid.gridOptions.api.setRowData([]);
    Grid.gridOptions.rowData = newConfig.rowData;
    Grid.gridOptions.api.setRowData(newConfig.rowData);
    autoSaveProgress();
  };

  function loadMore() {
    let currentColumns = Grid.gridOptions.columnDefs;
    Alts++;
    currentColumns.splice(currentColumns.length - 1, 0, {
      headerName: "Alt " + Alts,
      field: "alt" + Alts,
      editable: true,
    });
    if (Alts > 0) {
      Grid.gridOptions.api.forEachNode((innerRow) => {
        innerRow.data["alt" + Alts] = "";
        let newValues = parser.getVariable(innerRow.data.name);
        if (Alts == 1) {
          parser.setVariable(innerRow.data.name, [newValues, ""]);
        } else {
          parser.setVariable(innerRow.data.name, [...newValues, ""]);
        }
      });
    }
    Grid.gridOptions.api.setColumnDefs(currentColumns);
    autoSaveProgress();
  }

  function removeMore() {
    if (Alts > 0) {
      let currentColumns = Grid.gridOptions.columnDefs;
      Alts--;
      currentColumns.splice(currentColumns.length - 2, 1);
      Grid.gridOptions.api.forEachNode((innerRow) => {
        let varName = innerRow.data.name;
        let variable = parser.getVariable(varName);
        if (Alts == 0) {
          parser.setVariable(varName, variable[0]);
        } else {
          parser.setVariable(varName, variable.slice(0, variable.length - 1));
        }
        delete innerRow.data["alt" + (Alts == 0 ? 1 : Alts)];
      });
      Grid.gridOptions.api.setColumnDefs(currentColumns);
      autoSaveProgress();
    }
  }

  function addRows() {
    Grid.gridOptions.rowData.push({
      definition: "",
      description: "",
      description: "",
      alt: "0",
      unit: "",
    });
    Grid.gridOptions.api.applyTransaction({
      add: [
        {
          definition: "",
          description: "",
          description: "",
          alt: "0",
          unit: "",
        },
      ],
    });
    autoSaveProgress();
  }

  const recalculateDependents = (name, altIndex) => {
    Grid.gridOptions.api.forEachNode((innerRow) => {
      if (innerRow.data.name == name) {
        return;
      }
      let definition = innerRow.data.definition;
      if (definition.includes(name)) {
        if (Alts > 0) {
          let updatedFormula = definition;
          let currentVars = Object.keys(parser.variables);
          currentVars.forEach((v) => {
            if (updatedFormula.includes(v)) {
              updatedFormula = updatedFormula.replace(
                v,
                parser.getVariable(v)[altIndex ? altIndex : 0]
              );
            }
          });
          let parsedFormula = parser.parse(updatedFormula);
          let newValue = parser.getVariable(innerRow.data.name);
          if (Alts === 1) {
            newValue[1] = "" + parsedFormula.result;
            parser.setVariable(innerRow.data.name, newValue);
          } else {
            newValue[altIndex] = "" + parsedFormula.result;
            parser.setVariable(innerRow.data.name, newValue);
          }
          innerRow.setDataValue("alt" + altIndex, `${parsedFormula.result}`);
          recalculateDependents(innerRow.data.name, altIndex);
        } else {
          let newValue = parser.parse(definition).result;
          parser.setVariable(innerRow.data.name, newValue);
          innerRow.setDataValue("alt", `${newValue}`);
          recalculateDependents(innerRow.data.name);
        }
      }
    });
  };

  var changeNames = (name, newName) => {
    if (!name) return;
    Grid.gridOptions.api.forEachNode((innerRow) => {
      let definition = innerRow.data.definition;
      if (definition.includes(name)) {
        Grid.gridOptions.api.startEditingCell({
          rowIndex: innerRow.rowIndex,
          colKey: "definition",
          charPress: `${definition.replace(name, newName)}`,
        });
        Grid.gridOptions.api.stopEditing();
      }
    });
    autoSaveProgress();
  };
}
