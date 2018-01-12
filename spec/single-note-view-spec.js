function test_fourteen(){
  var note = new Note();
  var noteview = new NoteView(note);
  assert.isTrue(noteview.note === note, 'Can take a note as an argument ');
};

test_fourteen();
