var Classroom = function(students){
  this.students = students;
};

Classroom.prototype.find = function(first_name){
  for(i = 0; i <= this.students.length; i++){
    var student = this.students[i];
    if (student.firstName === first_name){
      return student;
    }
  }
};

Classroom.prototype.honorRollStudents = function(){
  var honor_roll = [];
  for(var student in this.students){
    if(this.students[student].averageScore() >= 95){
      honor_roll.push(this.students[student]);
    }
  }
  return honor_roll;
};
