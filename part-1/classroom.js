var Classroom = function(students){
  this.students = students;
}

Classroom.prototype.find = function(name){
  // return this.students.filter(function(student){
  //   return student.firstName === name
  // })[0]
  //this is pretty funky, it also works! I'll do a for-loop below, as I feel it is clearer code.
  for (var i = 0; i < this.students.length; i++){
    if (this.students[i].firstName === name)
      return this.students[i]
  }
}

Classroom.prototype.honorRollStudents = function(){
  result = []
  for (var i = 0; i < this.students.length; i++){
    if (this.students[i].averageScore() > 94)
      result.push(this.students[i])
  }
  return result;
}
