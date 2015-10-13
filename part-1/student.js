var Student = function(firstName, scores) {
  this.firstName = firstName;
  this.scores = scores;
}

Student.prototype.averageScore = function() {
  var total = this.scores.reduce(function(x, y) { return x + y });
  return total / this.scores.length;

  // var total = 0;
  // for (var i = 0; i < this.scores.length; i++) {
  //   total += this.scores[i];
  // }
  // return total;
}

Student.prototype.letterGrade = function() {
  var score = this.averageScore();
  if (score >= 90) { return "A" };
  if (score >= 80) { return "B" };
  if (score >= 70) { return "C" };
  if (score >= 60) { return "D" };
  return "F";
}
