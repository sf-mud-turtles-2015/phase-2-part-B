var Student = function(name, scores) {
  this.firstName =  name
  this.scores = scores
}

Student.prototype.averageScore = function(){
  var total =this.scores.reduce(function(previous, current) {
    return previous + current;
  })
 return Math.floor(total/(this.scores.length))
}

Student.prototype.letterGrade = function() {
  if ( this.averageScore() >= 90 ){
    return 'A'
  }
  else if ( this.averageScore() >= 80 ){
    return 'B'
  }
  else if ( this.averageScore() >= 70 ){
    return 'C'
  }
  else if ( this.averageScore() >= 60 ){
    return 'D'
  }
  else {
    return 'F'
  }
}

