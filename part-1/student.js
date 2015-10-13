var Student = function(name, scores) {
  this.firstName = name;
  this.scores = scores;
}

Student.prototype.averageScore = function(){
  total = this.scores.reduce(function(x, y){
    return x + y
  })
  return Math.floor(total/this.scores.length)
}

Student.prototype.letterGrade = function(){
  grade = this.averageScore()
  if (grade > 89){return 'A'}
  else if (grade > 79){return 'B'}
  else if (grade > 69){return 'C'}
  else if (grade > 59){return 'D'}
  else {return 'F'}
}
