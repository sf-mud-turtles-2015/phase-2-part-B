var Student = function(firstName, scores){
  this.firstName = firstName;
  this.scores = scores;

};

Student.prototype.averageScore = function(){
  var sum = 0
  for(var x = 0; x < this.scores.length; x++){
    sum = sum + this.scores[x]
  }
  var average = sum/this.scores.length;
  return Math.floor(average)
}
Student.prototype.letterGrade = function(){
  if (this.averageScore() >= 90) {
    return "A"
  }
  else if (this.averageScore() >= 80) {
    return "B"
  }
  else if (this.averageScore() >= 70) {
    return "C"
  }
  else if (this.averageScore() >= 60) {
    return "D"
  }
  else {
    return "F"
  }
}
