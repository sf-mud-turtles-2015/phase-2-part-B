var Student = function(firstName, scores){
  this.firstName = firstName;
  this.scores = scores;
  this.averageScore = function(){
    return Math.floor(this.scores.reduce(sum) / this.scores.length)
  }
  this.letterGrade = function(){
    if (this.averageScore() >= 90) return 'A'
    else if (this.averageScore() >= 80) return  'B'
    else if (this.averageScore() >= 70) return  'C'
    else if (this.averageScore() >= 60) return  'D'
    else return  'F'
  }
}

function sum(a, b) { return a + b }
