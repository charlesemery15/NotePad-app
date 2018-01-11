function test_twelve(){
  var notelist = new NoteList();
  var controller = new Controller(notelist);
  assert.isTrue(controller instanceof Controller, 'Can instantiate a controller ')
};

test_twelve();

window.onload = function(){
  function test_thirteen(){

    var DoubleNoteList = function(){
    };

    var DoubleView = function(){
      DoubleView.prototype.returnHTML = function(){
        return '<ul><li><div>Favourite Drink: Spiced rum and Ginger beer</div></li></ul>';
      };
    };

    var notelist = new DoubleNoteList();
    var view = new DoubleView();
    var controller = new Controller(notelist, view);
    var html = controller.view.returnHTML();
    console.log(html)
    controller.getHTML('app')
    console.log(controller.getHTML('app'))
    assert.isTrue(document.getElementById('app').innerHTML === html, 'InnerHTML should contain a note list with one note ')
  };
  test_thirteen();
};
