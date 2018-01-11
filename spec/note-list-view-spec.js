function test_eight(){
  var notelist = new NoteList();
  var view = new View(notelist);
  assert.isTrue(view.notelist === notelist, 'Can take a list as an argument ');
};

test_eight();

function test_nine(){
  var notelist = new NoteList();
  var view = new View(notelist);
  assert.isTrue(view.returnHTML() === '<ul></ul>', 'Will convert an empty note list into an html string ')
};

test_nine();

function test_ten(){
  var notelist = new NoteList();
  var view = new View(notelist);
  notelist.createAndAddNote()
  console.log(notelist)
  assert.isTrue(view.returnHTML() === '<ul><li><div>Default note</div></li></ul>', 'Will convert a one note note list into an html string ')
};

test_ten();
