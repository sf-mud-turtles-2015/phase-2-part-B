var Student = function(firstName, tests) {
  this.firstName = firstName
  this.scores = tests

  this.averageScore = function() {
    var sum = 0
    for( var i = 0; i < tests.length; i++ ){
      sum += parseInt( tests[i], 10 );
  }
    var average = (sum / tests.length)
    return Math.floor(average)
  }

  this.letterGrade = function() {
    if (this.averageScore(tests) >= 90) {
      return "A"
    }
    else if (this.averageScore(tests) >= 80) {
      return "B"
    }
    else if (this.averageScore(tests) >= 70) {
      return "C"
    }
    else if (this.averageScore(tests) >= 60) {
      return "D"
    }
    else {
      return "F"

    }
  }
}
