var Classroom = function(students){
  this.students = students

}

// Classroom.prototype.students = function(){
//   return
// }

Classroom.prototype.find = function(){
  return this.students.filter(function(student){
    return student.firstName === "Myra";
  })[0];
};

Classroom.prototype.honorRollStudents = function(){
  return this.students.filter(function(student){
    return student.averageScore() >= 95;
  });

};



