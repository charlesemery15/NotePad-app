function test_one(){
  var note = new Note();
  assert.isTrue(note.text === 'Default note', "Note should contain 'Default text' as a default ");
};

test_one();

function test_two(){
  var note = new Note('My first note');
  assert.isTrue(note.text === 'My first note', "Note should contain 'My first note' as an input ");
};

test_two();

function test_three(){
  var note = new Note()
  assert.isTrue(note.readNote() === 'Default note', "Note should be returned ");
};

test_three();
