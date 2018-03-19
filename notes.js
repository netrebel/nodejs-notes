console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (e) {

    }
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log('getting all notes');
};
var getNote = (title) => {
    console.log('read: ', title);
};
var removeNote = (title) => {
    console.log('remove: ', title);
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
