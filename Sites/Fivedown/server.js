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

    fs.readFile("/test.json", function (err, contents) {
      initializeApp(JSON.parse(contents.toString()));
    });
  }
);
