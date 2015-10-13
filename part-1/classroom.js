var Classroom = function(students) {
  this.students =  students
  this.find = function(seeking) {
    for (var i = 0; i < this.students.length; i++) {
      if (this.students[i].firstName === seeking) {
        return this.students[i]
      }
    }
  }

  this.honorRollStudents = function() {
    var smartOnes = [];
    for (var i = 0; i < this.students.length; i++) {
      if (this.students[i].averageScore() >= 95) {
        smartOnes.push(this.students[i])
        console.log("Smart ones" + smartOnes)
      }
    }
    return smartOnes
  }
}
