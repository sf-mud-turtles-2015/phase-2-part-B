var Student = function(name, scores){
  this.firstName = name;
  this.scores = scores;
}

Student.prototype.averageScore = function(){
  var total = 0;
for(var i = 0; i < this.scores.length; i++) {
    total += this.scores[i];
}
var avg = total / this.scores.length;
avg = Math.floor(avg);
return avg
}

Student.prototype.letterGrade = function(){

  if (this.averageScore() >= 90){

      return 'A'

  } else if(this.averageScore() >= 80){

      return 'B'
  }
    else if (this.averageScore() >= 70){

      return 'C'

  } else if (this.averageScore() >= 60){

      return 'D'

  } else{

      return 'F'

  }
}
