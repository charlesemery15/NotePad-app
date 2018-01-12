function test_fourteen(){
  var note = new Note();
  var noteview = new NoteView(note);
  assert.isTrue(noteview.note === note, 'Can take a note as an argument ');
};

test_fourteen();

function test_fifteen(){
  var note = new Note();
  var noteview = new NoteView(note);
  assert.isTrue(noteview.returnHTML() === '<p>Default note</p>', 'Will convert one note from the note into an html string ')
};

test_fifteen();
