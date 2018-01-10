function test_four(){
  var notelist = new NoteList();
  assert.isTrue(notelist.notes.length === 0, 'Has no notes when created ');
};

test_four();

function test_five(){
  var notelist = new NoteList();
  var note = new Note();
  notelist.addNote(note);
  assert.isTrue(notelist.notes[0] === note, 'has added a note to the notelist ')
};

test_five();
