const spreadsheet = document.querySelector("#spreadsheet");
var parser = new formulaParser.Parser();

//TODO Make error messages appealing to the eye.
//TODO add validation for definitions, ensure you don't have loop from hell and self-assigning
//TODO Remove eventListener once editing is finished

var data = [
  ["Height", "h", "", "4"],
  ["Area of a square", "area_square", "h^2", "16"],
  ["Volume of a Cube", "vol_cube", "h^3", "64"],
  ["", "", "", ""],
];
var Alts = 0;
let Editing = false;

parser.setVariable("h", "4");
parser.setVariable("area_sqr", "16");
parser.setVariable("vol_cube", "64");
function hasDefinition() {
  return false;
}

function removeMore(params) {}

var eGridDiv = document.querySelector("#myGrid");
let Grid = new agGrid.Grid(eGridDiv, {
  rowDragManaged: true,
  animateRows: true,
  rowData: [
    { description: "Height", name: "h", definition: "", alt: "4", units: "" },
    {
      description: "Area",
      name: "area_sqr",
      definition: "h^2",
      alt: "16",
      units: "",
    },
    {
      description: "Volume",
      name: "vol_cube",
      definition: "h^3",
      alt: "64",
      units: "",
    },
  ],
  columnDefs: [
    {
      headerName: "Description",
      field: "description",
      rowDrag: true,
      editable: true,
    },
    { headerName: "Name", field: "name", editable: true },
    { headerName: "Definition", field: "definition", editable: true },
    {
      headerName: "Alt",
      field: "alt",
      editable: function (params) {
        return params.node.data.definition === "";
      },
    },
    { headerName: "Unit", field: "unit", editable: true },
  ],
  onCellValueChanged: function (event) {
    if (!Editing) {
      let row = event.node.rowIndex,
        column = event.column.colId,
        oldValue = event.oldValue,
        newValue = event.newValue;

      if (column === "name") {
        let oldData = parser.getVariable(oldValue);
        parser.setVariable(newValue, oldData);
        if (oldValue.length) changeNames(oldValue, newValue);
      }

      if (column.includes("alt")) {
        const variableName = event.data.name;
        let altIndex = event.column.colId.slice(3);
        if (Alts > 0) {
          let currentAltValues = parser.getVariable(variableName);
          currentAltValues[altIndex ? altIndex : 0] = newValue;
          parser.setVariable(variableName, currentAltValues);
          recalculateDependents(variableName, altIndex);
        } else {
          parser.setVariable(variableName, newValue);
          recalculateDependents(variableName);
        }
      }
      if (column === "definition") {
        const variableName = event.data.name;
        const newFormula = newValue;
        if (Alts > 0) {
          if (newFormula.includes(variableName)) {
            console.log("WHAT");
            return;
          }

          let updatedDefinitions = [];
          let currentDefinitions = parser.getVariable(variableName);
          let currentVars = Object.keys(parser.variables);

          currentDefinitions.forEach((def, i) => {
            let tempFormula = newFormula;
            currentVars.forEach((v) => {
              if (tempFormula.includes(v)) {
                tempFormula = tempFormula.replace(v, parser.getVariable(v)[i]);
              }
            });
            updatedDefinitions.push(parser.parse(tempFormula).result);
            event.node.setDataValue(
              "alt" + (i == 0 ? "" : i),
              `${parser.parse(tempFormula).result}`
            );
            recalculateDependents(variableName, i);
          });
          parser.setVariable(variableName, updatedDefinitions);
        } else {
          let newCalc = parser.parse(newFormula).result;
          if (newFormula.includes(variableName)) {
            console.log("WHAT");
            return;
          }
          parser.setVariable(variableName, newCalc);
          event.node.setDataValue("alt", `${newCalc}`);
          recalculateDependents(variableName);
        }
      }
    }
  },
});

function toggleEventListening() {
  Editing = !Editing;
}

function loadMore() {
  let currentColumns = Grid.gridOptions.columnDefs;
  Alts++;
  currentColumns.splice(currentColumns.length - 2, 0, {
    headerName: "Alt " + Alts,
    field: "alt" + Alts,
    editable: function (params) {
      return params.node.data.definition === "";
    },
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
}

const recalculateDependents = (name, altIndex) => {
  Grid.gridOptions.api.forEachNode((innerRow) => {
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
};
