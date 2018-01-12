function test_eight(){
  var notelist = new NoteList();
  var view = new View(notelist);
  assert.isTrue(view.notelist === notelist, 'Can take a list as an argument ');
};

test_eight();

function test_nine(){
  var notelist = new NoteList();
  console.log(notelist);
  var view = new View(notelist);
  console.log(view)
  assert.isTrue(view.returnHTML() === '<ul></ul>', 'Will convert an empty note list into an html string ')
};

test_nine();

function test_ten(){
  var notelist = new NoteList();
  var view = new View(notelist);
  notelist.createAndAddNote()
  assert.isTrue(view.returnHTML() === '<ul><li><div>Default note</div></li></ul>', 'Will convert one note from the note list into an html string ')
};

test_ten();

function test_eleven(){
  var notelist = new NoteList();
  var view = new View(notelist);
  notelist.createAndAddNote('first note')
  notelist.createAndAddNote('second note')
  assert.isTrue(view.returnHTML() === '<ul><li><div>first note</div></li><li><div>second note</div></li></ul>', 'Will convert multiple notes from the note list into an html string ')
};

test_eleven();
