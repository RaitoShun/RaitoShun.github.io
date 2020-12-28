window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;

const dbName = "devDB";

var request = indexedDB.open(dbName, 2);

request.onerror = function (event) {
  // Handle errors.
};

request.onsuccess = function () {};

BrowserFS.install(window);

BrowserFS.configure(
  {
    fs: "IndexedDB",
    options: { storeName: "" },
  },
  function (e) {
    if (e) {
      // An error happened!
      throw e;
    }
    var fs = require("fs");
    const defaultConfig = {
      Alts: "0",
      variables: {},
      rowData: [],
      columnDefs: [
        {
          headerName: "Description",
          field: "description",
          rowDrag: true,
          editable: true,
          resizable: true,
          suppressMovable: true,
        },
        { headerName: "Name", field: "name", editable: true, resizable: true },
        {
          headerName: "Definition",
          field: "definition",
          editable: true,
          resizable: true,
        },
        { headerName: "Alt", field: "alt", editable: true, resizable: true },
        { headerName: "Unit", field: "unit", editable: true, resizable: true },
      ],
    };

    fs.readFile("/test.json", function (err, contents) {
      if (contents) {
        initializeApp(defaultConfig);
      } else {
        initializeApp(JSON.parse(contents.toString()));
      }
    });
  }
);
