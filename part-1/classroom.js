function Classroom(students){
  this.students = students
}

Classroom.prototype.find = function(name){
  // this is not working....
  return this.students.filter(function(student){
    console.log(student.firstName)
    console.log(name)

    if(student.firstName === name){
      console.log("true")
      return student
    }else{
      console.log("false")
    }

  })[0]
}

Classroom.prototype.honorRollStudents = function(){
  return this.students.filter(function(student){
    return student.averageScore() >= 95
  })
}
