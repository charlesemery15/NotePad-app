(function(exports){
  var NoteView = function(note) {
    this.note = note;
  };

  NoteView.prototype.returnHTML = function(){
    htmlstring = '<li><div>' + this.note.readNote() + '</div></li>';
    return '<ul>' + htmlstring + '</ul>';
  };

exports.NoteView = NoteView;
})(this);
