function test_one(){
  var note = new Note();
  assert.isTrue(note.text === 'Default note', "Note should contain 'Default text' as a default")
};

test_one();
