var Student = function(name, scores) {
  this.firstName = name;
  this.scores = scores;
  this.averageScore = function() {
    var sum = scores.reduce(function(a, b) { return a + b; })
    var avg = sum / scores.length
    return Math.floor(avg)
  };
  this.letterGrade = function() {
    console.log(this.averageScore())
    if (this.averageScore() >= 90) {
      return "A";
    } else if (this.averageScore() >= 80) {
      return "B";
    } else if (this.averageScore() >= 70) {
      return "C";
    } else if (this.averageScore() >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
}

// var claire = new Student()
