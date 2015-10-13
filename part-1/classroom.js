var Classroom = function(students) {
  this.students = students;
}

Classroom.prototype.find = function(firstName) {
  for (var i = 0; i < this.students.length; i++) {
    if (this.students[i].firstName === firstName) {
      return this.students[i];
    }
  }
}

Classroom.prototype.honorRollStudents = function() {
  var honor_roll_students = [];
  for (var i = 0; i < this.students.length; i++) {
    if (this.students[i].averageScore() >= 95) {
      honor_roll_students.push(this.students[i]);
    }
  }
  return honor_roll_students;
}
