var Student = function(firstName, scores){
  this.firstName = firstName;
  this.scores = scores;
};

Student.prototype.averageScore = function(){
  var sum = 0;
  for (var i = 0; i < this.scores.length; i++){
    sum += this.scores[i]
  }
  var avg = sum / this.scores.length
  avg = Math.floor(avg)
  return avg
}

Student.prototype.letterGrade = function(average){
  average = this.averageScore();
  if (average >= 90){
    return "A"
  } else if (average >= 80){
    return "B"
  } else if (average >= 70){
    return "C"
  } else if (average >= 60){
    return "D"
  } else {
    return "F"
  }
}
