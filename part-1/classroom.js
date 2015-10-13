function Classroom(students){
  this.students = students
}

Classroom.prototype.find = function(name){

  for(var i = 0; i < this.students.length; i ++){
    if(this.students[i].firstName === name){
      return this.students[i]
    }
  }

  // Using the filter method....

  // return this.students.filter(function(student){
  //   if(student.firstName === name){
  //     return student
  //   }else{
  //   }
  // })[0]
}

Classroom.prototype.honorRollStudents = function(){
  return this.students.filter(function(student){
    return student.averageScore() >= 95
  })
}
