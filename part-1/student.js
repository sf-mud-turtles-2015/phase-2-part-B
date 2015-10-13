var Student = function(firstName, scores) {
  this.firstName = firstName;
  this.scores = scores ;
}

// student = new Student("Lysette", [100, 100, 100, 4, 100])

Student.prototype.averageScore = function() {
  var sum = 0;
  for (var i = 0; i < this.scores.length; i++ ) {
    sum += this.scores[i]
  }
  return Math.floor(sum/this.scores.length);
}

Student.prototype.letterGrade = function() {
  var grade = ["A", "B", "C", "D", "F"]
  if (this.averageScore() >= 90) {
    return grade[0];
  } else if (this.averageScore() >= 80) {
    return grade[1];
  } else if (this.averageScore() >= 70) {
    return grade[2];
  } else if (this.averageScore() >= 60) {
    return grade[3];
  } else {
    return grade[4];
  }
}
