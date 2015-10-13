var Student = function(firstName, scores){
  this.firstName = firstName;
  this.scores = scores;
  this.averageScore = function(){
    var sum = 0;
    for(i = 0; i < scores.length; i++){
      sum += scores[i];
    }
    return (Math.floor(sum / scores.length));
    // add all scores and divide by amount of scores
  };
  this.letterGrade = function(){
    var avg = this.averageScore();
    if(avg >= 90){
      return "A";
    } else if (avg >= 80){
      return "B";
    } else if (avg >= 70){
      return "C";
    } else if (avg >= 60){
      return "D";
    } else if (avg >= 50){
      return "F";
    }
  };
};
