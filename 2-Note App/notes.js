console.log("Starting notes.js app");

const fs = require("fs");

/*fetch note from file system*/
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

/*save notes to json file (to store them in file system)*/
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
  /*create an array store and assign all notes wich are in file system*/
  var notes = fetchNotes();

  /*create an object called "note" to store title and body arguments
   passed to addNote function*/
  var note = {
    title,
    body
  };

  /*check if there is a note in json file with same title*/
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    /*push note in array*/
    notes.push(note);
    /*save notes array to json file*/
    saveNotes(notes);
    /*return save note*/
    return note;
  }
};

var getAll = () => {
  console.log("Getting all notes...");
};

var getNote = (title) => {
  console.log("Getting note", title);
}

var removeNote = (title) => {
  /*create an array store and assign all notes wich are in file system*/
  var notes = fetchNotes();
  /*save in filteredNotes array all notes that don't have to be deleted*/
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.lenght !== filteredNotes.lenght;
}

/*basic functions export */
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
