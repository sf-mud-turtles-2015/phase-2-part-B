var Student = function(){
  this.firstName = "Lysette";
  this.scores = [100,100,100,4,100];
  this.averageScore = function(scores){
    sum = 0
    for (i=0; this.scores.length > i; i++){
      sum += this.scores[i]
    }
    return Math.floor(sum / this.scores.length)
  }
  this.letterGrade = function(){
    if (this.averageScore(this.scores) >= 90){
      return "A";
    }
    if (this.averageScore(this.scores) >= 80){
      return "B";
    }
    if (this.averageScore(this.scores) >= 70){
      return "C";
    }
    if (this.averageScore(this.scores) >= 60){
      return "D";
    }
    if (this.averageScore(this.scores) >= 50){
      return "F";
    }
  }
}
