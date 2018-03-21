console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = process.argv[2];

// console.log('Yargs: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(note);
    } else {
        console.log("Note already exists.");
    }

} else if (command == 'list') {
    notes.getAll();
} else if (command == 'read') {
    var note = notes.getNote(argv.title);
    if(note) {
        console.log('Note found: ' + JSON.stringify(note));
    } else {
        console.log('Note not found.')
    }
} else if (command == 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
