

var Classroom = function(students){
  this.students = students
};



Classroom.prototype.find = function(name){
  return this.students.filter(function(student){
      return student.firstName === name;
  })[0];// should have used for loop
};

Classroom.prototype.honorRollStudents = function(){
  goodstudents = []
  for (var i = 0; i < this.students.length; i++){
    if (this.students[i].averageScore() >= 95){
      goodstudents.push(this.students[i]);
    };
  };
  return goodstudents
};



