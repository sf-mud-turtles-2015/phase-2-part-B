function Student(firstName,scores) {
  this.firstName = firstName;
  this.scores = scores;
}

Student.prototype.averageScore = function(){
  var average = 0
  for(var i = 0; i < this.scores.length; i++){
    average += this.scores[i]
  }
  // have to wrap the .floor method around everything...
  return Math.floor(average / (this.scores.length))
}

Student.prototype.letterGrade = function() {
 // console.log(this.averageScore())

   if(this.averageScore() >= 90){
    return "A"
  } else if(this.averageScore() >= 80){
    return "B"
  } else if(this.averageScore() >= 70){
    return "C"
  } else if(this.averageScore() >= 60){
    return "D"
  }else {
    return "F"
  }
} //end of letterGrade prototype

