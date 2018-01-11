(function(exports){
  function Controller(notelist = new NoteList(), view = new View(notelist)){
    this.notelist = notelist;
    this.view = view;
  };

  Controller.prototype.getHTML = function(elementID){
    document.getElementById(elementID).innerHTML = this.view.returnHTML();
  };

  exports.Controller = Controller;
})(this);

window.onload = function(){
  controller = new Controller();
  controller.notelist.createAndAddNote('Favourite Drink: Spiced rum and Ginger beer');
  controller.getHTML('app');
};
