var errorModal = document.getElementById("error-modal");
var span = document.getElementsByClassName("close")[1];
var errorModalText = document.querySelector("#error-text");
var jsonModal = document.querySelector("#json-modal");
var jsonText = document.querySelector("#json-text");
var jsonPrompt = document.querySelector("#json-prompt");
var getJsonButt = document.querySelector("#json-get");
var setJsonButt = document.querySelector("#json-set");
var submitJson = document.querySelector("#submit-json");
var buttons = document.querySelectorAll(".action");
var home = document.querySelector("#home");
// When the user clicks on <span> (x), close the errorModal
span.onclick = function () {
  errorModal.style.display = "none";
};

function initializeApp(data, project) {
  home.style.display = "none";
  window.document.title =
    project.replace(/^\w/, (c) => c.toUpperCase()) + " | FiveDown";
  const newColButt = document.querySelector("#new-column");
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
  //TODO Pasting in columns can delete all of them.
  //TODO Prevent any keyboard events in edit

  var Alts = JSON.parse(data.Alts);
  var removedAlts = data.removedAlts;
  let Editing = false;

  function showError(message) {
    errorModalText.innerText = message;
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
        Editing = true;
        let row = event.node.rowIndex,
          column = event.column.colId,
          oldValue = event.oldValue,
          newValue = event.newValue;
        if (column == "unit" || column == "description") {
          autoSaveProgress();
          return;
        }

        if (column === "name") {
          if (!oldValue && !newValue) {
            return;
          }

          if (!newValue && oldValue) {
            Grid.gridOptions.api.forEachNode((row) => {
              if (
                row.data.definition &&
                row.data.definition.split(/\W/).includes(oldValue)
              ) {
                showError(
                  "Remove dependencies of this variable first before deleting this row"
                );
                return;
              }
            });
            delete parser.variables[oldValue];
            autoSaveProgress();
            return;
          }

          if (newValue.includes(" ")) {
            showError("No spaces in variable names are allowed");
            event.node.setDataValue("name", `${oldValue}`);
            return;
          }

          if (Object.keys(parser.variables).includes(newValue)) {
            showError("That name is already taken");
            event.node.setDataValue("name", `${oldValue}`);
            return;
          }

          if (
            parser.parse(newValue).result ||
            parser.parse(newValue).error == "#VALUE!"
          ) {
            showError("No mathematical concepts as names");
            event.node.setDataValue("name", `${oldValue}`);
            return;
          }

          let oldData = parser.getVariable(oldValue);

          if (oldData) {
            parser.setVariable(newValue, oldData);
            delete parser.variables.oldValue;
          } else {
            if (event.data.alt || newValue) {
              if (Alts > 0) {
                let valueArr = [event.data.alt];
                for (let i = 1; i <= Alts; i++) {
                  valueArr.push(event.data["alt" + i]);
                }
                parser.setVariable(newValue, valueArr);
              } else {
                parser.setVariable(newValue, event.data.alt);
                autoSaveProgress();
                return;
              }
            }
          }
          if (oldValue) changeNames(oldValue, newValue);
          autoSaveProgress();
          return;
        }

        if (column.includes("alt")) {
          let altIndex = event.column.colId.slice(3);
          if (event.data.definition) {
            showError("Cannot have a definition and raw input.");
            event.node.setDataValue(
              "alt" + (altIndex.length > 0 ? altIndex : ""),
              `${oldValue}`
            );
            Grid.gridOptions.api.stopEditing(true);
            Editing = true;
            return;
          }
          Editing = false;

          if (isNaN(newValue) && newValue) {
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
          return;
        }
        if (column === "definition") {
          if (!oldValue && !newValue) {
            return;
          }

          if (!newValue) {
            return;
          }

          if (!event.data.name) {
            showError("Set a name before fiddling with the defintion");
            event.node.setDataValue("definition", ``);
            return;
          }

          const variableName = event.data.name;
          let testFormula = newValue.split(/\W/);
          if (testFormula.includes(variableName)) {
            showError("No self-referencing variables allowed");
            event.node.setDataValue(
              "definition",
              `${oldValue ? oldValue : ""}`
            );

            return;
          }

          if (Alts > 0) {
            let updatedDefinitions = [];
            let currentDefinitions = parser.getVariable(variableName);
            let currentVars = Object.keys(parser.variables);

            currentDefinitions.forEach((def, i) => {
              let tempFormula = newValue;
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
              parser.setVariable(variableName, updatedDefinitions);
              recalculateDependents(variableName, i);
              return;
            });
          } else {
            if (parser.parse(newValue).error) {
              showError("That formula isn't valid");
              event.node.setDataValue("definition", `${oldValue}`);
              return;
            }
            let newCalc = parser.parse(newValue).result;
            parser.setVariable(variableName, newCalc);
            recalculateDependents(variableName);
            event.node.setDataValue("alt", `${parser.parse(newValue).result}`);
            autoSaveProgress();
            return;
          }
        }
      }
    },
    onCellEditingStarted: (event) => {
      Editing = false;
    },
    suppressKeyboardEvent: (keypress) => {
      if (!keypress.editing) {
        let dependancy = false;
        let isDeleteKey = keypress.event.keyCode === 46;
        if (isDeleteKey) {
          let varName = keypress.data.name;
          if (varName) {
            Grid.gridOptions.api.forEachNode((row) => {
              if (
                row.data.definition &&
                row.data.definition.split(/\W/).includes(varName)
              ) {
                showError(
                  "Remove dependencies of this variable first before deleting this row"
                );
                dependancy = true;
              }
            });
            delete parser.variables[varName];
            autoSaveProgress();
          }
          if (!dependancy) {
            const selectedRows = keypress.api.getSelectedRows();
            Grid.gridOptions.rowData.pop();
            autoSaveProgress();
            Grid.gridOptions.api.applyTransaction({ remove: selectedRows });
          }
          return true;
        }
      }
    },
  });

  function initCloseButts() {
    document.querySelectorAll(".closable").forEach((butt) => {
      butt.insertAdjacentHTML("beforeend", '<span class="cross">x</span>');
    });

    let closeButtons = document.querySelectorAll(".cross");
    closeButtons.forEach((butt) => {
      butt.addEventListener("click", function (e) {
        removeMore(e.target.parentElement.getAttribute("col-Id"));
      });
    });
  }
  initCloseButts();

  newColButt.onclick = function () {
    loadMore();
  };
  newRowButt.onclick = function () {
    addRows();
  };
  function autoSaveProgress() {
    let newRows = [];
    Grid.gridOptions.api.forEachNode((row) => {
      newRows.push(row.data);
    });
    fs.writeFile(
      `/${project}.json`,
      JSON.stringify({
        rowData: newRows,
        columnDefs: Grid.gridOptions.columnDefs,
        variables: parser.variables,
        Alts: Alts,
        removedAlts: removedAlts,
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
      Alts: Alts,
      removedAlts,
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
    if (!newConfig.removedAlts) {
      showError(
        "The configuration needs a max alt amount (equal to number of alt columns"
      );
      return;
    }
    if (isNaN(newConfig.Alts)) {
      showError("The configuration needs an Alt value.");
      return;
    }
    parser.variables = newConfig.variables;
    Alts = JSON.parse(newConfig.Alts);
    removedAlts = newConfig.removedAlts;
    Grid.gridOptions.api.setColumnDefs(newConfig.columnDefs);
    Grid.gridOptions.columnDefs = newConfig.columnDefs;
    Grid.gridOptions.api.setRowData([]);
    Grid.gridOptions.rowData = newConfig.rowData;
    Grid.gridOptions.api.setRowData(newConfig.rowData);
    autoSaveProgress();
  };

  function loadMore() {
    let currentColumns = Grid.gridOptions.columnDefs;
    let altNumber;
    if (Alts == 0) {
      removedAlts.sort((a, b) => a > b);
    }
    Alts++;
    altNumber = removedAlts.pop();
    console.log(altNumber, "Current Alts: " + Alts);
    currentColumns.push({
      headerName: "Alt " + (altNumber ? altNumber : Alts),
      field: "alt" + (altNumber ? altNumber : Alts),
      editable: true,
      headerClass: "closable",
      cellClassRules: {
        "grid-green": "!data.definition",
        "grid-blue": "data.definition",
      },
      resizable: true,
    });

    if (Alts > 0) {
      Grid.gridOptions.api.forEachNode((innerRow) => {
        innerRow.data["alt" + (altNumber ? altNumber : Alts)] = "";
        if (innerRow.data.name) {
          let newValues = parser.getVariable(innerRow.data.name);
          if (Alts == 1) {
            parser.setVariable(innerRow.data.name, [newValues, ""]);
          } else {
            parser.setVariable(innerRow.data.name, [...newValues, ""]);
          }
        }
      });
    }
    Grid.gridOptions.api.setColumnDefs(currentColumns);
    autoSaveProgress();
    initCloseButts();
  }

  function removeMore(id) {
    if (Alts > 0) {
      Alts--;
      let currentColumns = Grid.gridOptions.columnDefs;
      currentColumns.forEach((n, i) => {
        if (n.field == id) {
          currentColumns.splice(i, 1);
          removedAlts.push(id.slice(3, id.length));
        }
      });
      Grid.gridOptions.api.forEachNode((innerRow) => {
        let varName = innerRow.data.name;
        let variable = parser.getVariable(varName);
        if (varName) {
          if (Alts == 0) {
            parser.setVariable(varName, variable[0]);
          } else {
            parser.setVariable(varName, variable.slice(0, variable.length - 1));
          }
        }
        delete innerRow.data["alt" + (Alts == 0 ? 1 : Alts)];
      });
      Grid.gridOptions.api.setColumnDefs(currentColumns);
      autoSaveProgress();
      initCloseButts();
    }
  }

  function addRows() {
    let newRow = {
      definition: "",
      name: "",
      description: "",
      alt: "0",
      unit: "",
    };
    for (let i = 1; i <= Alts; i++) {
      newRow["alt" + i] = "";
    }
    Grid.gridOptions.rowData.push(newRow);
    Grid.gridOptions.api.applyTransaction({
      add: [newRow],
    });
    autoSaveProgress();
  }

  const recalculateDependents = (name, altIndex) => {
    Grid.gridOptions.api.forEachNode((innerRow) => {
      if (innerRow.data.name == name) {
      }
      let definition = innerRow.data.definition;
      if (definition && definition.includes(name)) {
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

          let parsedFormula = parser.parse(updatedFormula).result;
          let newValue = parser.getVariable(innerRow.data.name);

          if (Alts === 1) {
            newValue[1] = "" + parsedFormula;
            parser.setVariable(innerRow.data.name, newValue);
          } else {
            newValue[altIndex] = "" + parsedFormula;
            parser.setVariable(innerRow.data.name, newValue);
          }
          innerRow.setDataValue(
            "alt" + (altIndex ? altIndex : ""),
            `${parsedFormula}`
          );
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
