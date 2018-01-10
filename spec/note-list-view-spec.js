function test_eight(){
  var notelist = new NoteList();
  var view = new View(notelist);
  assert.isTrue(view.notelist === notelist, 'can take a list as an argument ');
};

test_eight();
