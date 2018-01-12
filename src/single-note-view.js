(function(exports){
  var NoteView = function(note) {
    this.note = note;
  };

  NoteView.prototype.returnHTML = function(){
    return '<p>' + this.note.readNote() + '</p>';

  };

exports.NoteView = NoteView;
})(this);
