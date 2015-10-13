var Classroom = function(students){
  this.students = students;
  console.log(this.students)
  this.find = function(name){
    var targetStudent //tricky!
    students.forEach(function(student){
      if (student.firstName === name){
        targetStudent = student //tricky! I wanted to return student here but it returns undefined!
      }
    })
    return targetStudent //tricky!
  }
  this.honorRollStudents = function(){
    var honorStudents = []
    students.forEach(function(student){
      if (student.averageScore() >= 95){
        honorStudents.push(student)
      }
    })
    return honorStudents
  }
}
