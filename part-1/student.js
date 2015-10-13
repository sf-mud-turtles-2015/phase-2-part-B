var Student = function(firstName, score_array){
  this.firstName = firstName
  this.scores = score_array

};

var student = new Student('Lysette', [100, 100, 100, 4, 100]);

Student.prototype.averageScore = function(){
  var total = 0
  for( var i = 0; i < this.scores.length; i ++){
    total += this.scores[i];
  }

  var average = total / this.scores.length
  return Math.floor(average)
};

Student.prototype.letterGrade = function(){
  if (this.averageScore() >= 90){
    return "A"
  }
  else if (this.averageScore() >= 80){
    return "B"
  }
    else if (this.averageScore() >= 70){
    return "C"
  }
    else if (this.averageScore() >= 60){
    return "D"
  }
    else {
    return "F"
  }

};

