var Classroom = function(students) {
  this.students = students;
}

Classroom.prototype.find = function(name) {
  return this.students.find(function(student) { student.name == name });
}

Classroom.prototype.honorRollStudents() = function() {
  return this.students.filter(function(student) { student.averageScore() >= 95 });
}
