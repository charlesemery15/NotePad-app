function test_four(){
  var notelist = new NoteList();
  assert.isTrue(notelist.notes.length === 0, 'Has no notes when created ');
};

test_four();

function test_five(){
  var notelist = new NoteList();
  var note = new Note();
  notelist.addNote(note);
  assert.isTrue(notelist.notes[0] === note, 'Has added a note to the notelist ')
};

test_five();

function test_six(){
  var notelist = new NoteList();
  var note = new Note();
  notelist.addNote(note);
  assert.isTrue(notelist.returnAllNotes() === notelist.notes, 'Can return all the notes ')
};

test_six();

function test_seven(){
  var notelist = new NoteList();
  notelist.createAndAddNote()
  assert.isTrue(notelist.notes[0].readNote() === 'Default note', 'Has added and created a note ')
};

test_seven();
