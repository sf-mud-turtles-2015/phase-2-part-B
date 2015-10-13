function Student(firstName,scores) {
  this.firstName = firstName;
  this.scores = scores;
}

Student.prototype.averageScore = function(){
  var average = 0
  for(var i = 0; i < this.scores.length; i++){
    average += this.scores[i]
  }
  // have to wrap the .floor method around everything...
  return Math.floor(average / (this.scores.length))
}

Student.prototype.letterGrade = function() {
  console.log(this.firstName)
}

