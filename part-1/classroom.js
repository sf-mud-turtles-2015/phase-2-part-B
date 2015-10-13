var Classroom = function(students) {
  this.students = students;
  this.find = function(stud_name) {
    for (var i = 0; i < students.length; i++) {
      if (students[i].firstName === stud_name) {
        return students[i];
      }
    }
  };
  this.honorRollStudents = function() {
    honor_list = [];
    for (var i = 0; i < students.length; i++) {
      if (students[i].averageScore() >= 95) {
        honor_list.push(students[i]);
      }
    }
    return honor_list;
  }
}
