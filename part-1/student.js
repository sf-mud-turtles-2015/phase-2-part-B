var Student = function(name,scores){
  this.firstName = name;
  this.scores = scores;
};

Student.prototype.averageScore = function(){
  var sum = 0;
  for(var i = 0; i < this.scores.length; i++)
  {
      sum = sum + this.scores[i];
  }
  return Math.floor((sum/this.scores.length));
};

Student.prototype.letterGrade = function(){
  var averageGrade = this.averageScore();
  if (averageGrade >= 90){ return "A"}
  else if (averageGrade < 90 && averageGrade >= 80 ){ return "B"}
  else if (averageGrade < 80 && averageGrade >= 70 ){ return "C"}
  else if (averageGrade < 70 && averageGrade >= 60 ){ return "D"}
  else if (averageGrade < 60){ return "F"};
};

