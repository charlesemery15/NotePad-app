(function(exports){
  var NoteList = function() {
    this.notes = [];
  };

  NoteList.prototype.addNote = function(note){
    // if(note instanceof Note) checks if the argument passed in is of the Note Class
    if(note instanceof Note) {
      this.notes.push(note);
    }
  };

exports.NoteList = NoteList;
})(this);
