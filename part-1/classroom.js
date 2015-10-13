var Classroom = function(students){
  this.students = students;
}

Classroom.prototype.find = function(name){
  for (i = 0; this.students.length > i; i++){
    if (this.students[i].firstName === name){
      return this.students[i];
    }
  }
}

Classroom.prototype.honorRollStudents = function(){
  honorRoll = [];
  for (i = 0; this.students.length > i; i++){
    if (this.students[i].averageScore() >= 95){
      honorRoll.push(this.students[i]);
    }
  }
  return honorRoll;
}
