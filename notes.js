console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('will add: ' + title + ": " + body);
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
