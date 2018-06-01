console.log("Starting app.js");

const fs = require("fs");
const os = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
var command = process.argv[2];
console.log("Command: " + command);

if (command == "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created!");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }else {
    console.log("Not Title taken or duplicate Note");
  }
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  if (noteRemoved === true) {
    console.log("Note not Removed");
  } else if (noteRemoved === false){
    console.log("Note Removed");
  }
} else {
  console.log("Command not recognized");
}
