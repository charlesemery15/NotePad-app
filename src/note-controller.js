window.onload = function(){
  (function(exports){
    function Controller(notelist = new NoteList()){
      this.notelist = notelist
      this.notelist.createAndAddNote('Favourite Drink: Spiced rum and Gingerbeer')
      this.view = new View(this.notelist)

      Controller.prototype.getHTML = function(){
        document.getElementById('app').innerHTML = this.view.returnHTML();
      };
    };
    exports.Controller = Controller;
  })(this);

  controller = new Controller()
  controller.getHTML()
};
