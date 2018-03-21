console.log('Starting notes.js');

const fs = require('fs');

var fetchNodes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNodes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('getting all notes');
};
var getNote = (title) => {
    console.log('read: ', title);
};
var removeNote = (title) => {
    var notes = fetchNodes();
    var notesAfterDelete = notes.filter((note) => note.title !== title);
    saveNotes(notesAfterDelete);
    return notes.length !== notesAfterDelete.length;
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
