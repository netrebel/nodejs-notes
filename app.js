console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

let title = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};

let body = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title: title,
        body: body
    })
    .command('list', 'List all commands')
    .command('read', 'Read a note', {
        title: title
    })
    .command('remove', 'Remove a note', {
        title: title
    })
    .help()
    .argv;
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
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes.`);
    allNotes.forEach((note) => {
        console.log('Note found: ' + JSON.stringify(note));
    });
} else if (command == 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found: ' + JSON.stringify(note));
    } else {
        console.log('Note not found.')
    }
} else if (command == 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
