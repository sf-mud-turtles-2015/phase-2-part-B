var Student = function(firstName, scores) {
  this.firstName = firstName;
  this.scores = scores;
}

Student.prototype.averageScore = function() {
  return parseInt(this.scores.reduce(function(x, y) { return x + y }) / this.scores.length);

  // var total = 0,
  //     len = this.scores.length;
  // for (var i = 0; i < len; i++) {
  //   total += this.scores[i];
  // }

  // while (len--) {
  //   total += this.scores[len];
  // }

  // return parseInt(total / this.scores.length);
}

Student.prototype.letterGrade = function() {
  var score = this.averageScore();
  if (score >= 90) { return "A" };
  if (score >= 80) { return "B" };
  if (score >= 70) { return "C" };
  if (score >= 60) { return "D" };
  return "F";
}
