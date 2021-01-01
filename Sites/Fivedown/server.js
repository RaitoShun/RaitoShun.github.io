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
      removedAlts: [],
      variables: {},
      rowData: [],
      columnDefs: [
        {
          headerName: "",
          field: "Row Order",
          suppressMovable: true,
          rowDrag: true,
          lockPosition: true,
          lockPinned: false,
          width: 50,
        },
        {
          headerName: "Description",
          field: "description",
          editable: true,
          resizable: true,
          lockPinned: true,
        },
        {
          headerName: "Name",
          field: "name",
          editable: true,
          resizable: true,
          lockPinned: true,
        },
        {
          headerName: "Definition",
          field: "definition",
          editable: true,
          resizable: true,
          lockPinned: true,
        },
        {
          headerName: "Alt",
          field: "alt",
          editable: true,
          resizable: true,
          lockPinned: true,
          cellClassRules: {
            "grid-green": "!data.definition",
            "grid-blue": "data.definition",
          },
        },
        {
          headerName: "Unit",
          field: "unit",
          editable: true,
          resizable: true,
          lockPinned: true,
        },
      ],
    };
    const defaultProjects = { projects: { test: 1 } };

    let currentProject = window.location.href.split("#")[1];

    let initializeProjects = () => {
      fs.readFile("/projects.json", function (err, contents) {
        let projects = defaultProjects;
        if (contents) {
          projects = JSON.parse(contents.toString());
        }
        projects.projects[currentProject] = 1;
        fs.writeFile(
          "/projects.json",
          JSON.stringify(projects),
          function (err) {
            fs.writeFile(
              `/${currentProject}.json`,
              JSON.stringify(defaultConfig),
              function (err) {
                initializeApp(defaultConfig, currentProject);
              }
            );
          }
        );
      });
    };

    console.log("I reloaded!");

    function showHome() {
      fs.readFile("/projects.json", function (err, contents) {
        if (!contents) {
          fs.writeFile(
            "/projects.json",
            JSON.stringify(defaultProjects),
            function (err) {
              navigationShow(
                true,
                JSON.stringify(defaultProjects),
                defaultConfig
              );
            }
          );
        } else {
          navigateShow(false, contents, defaultConfig);
        }
      });
    }

    if (!currentProject || currentProject == "projects") {
      showHome();
      return;
    } else {
      fs.readFile(`/${currentProject}.json`, function (err, contents) {
        if (!contents) {
          initializeProjects();
        } else {
          initializeApp(defaultConfig, currentProject); //Change this config though!
        }
      });
    }
  }
);
