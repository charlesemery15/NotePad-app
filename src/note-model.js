(function(exports){
  var Note = function(text = 'Default note') {
    this.text = text;
  };

  Note.prototype.readNote = function(){
  return this.text;
  };

exports.Note = Note;
})(this);
