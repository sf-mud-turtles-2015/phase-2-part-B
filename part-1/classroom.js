var Classroom = function(students){
  this.students = students;
  this.find = function(nameSearch){
    var searchArray = []
      this.students.forEach(function(student){
        if (student.firstName === nameSearch) {
          searchArray.push(student)
        }
      })
      return searchArray[0]
}

}


  Classroom.prototype.honorRollStudents = function(){
      var honorArray = []
      this.students.forEach(function(student){
        if (student.averageScore() >= 95){
            honorArray.push(student)
        }
      })
      return honorArray
  }







// function(colors){
//     var array = []
//     this.replenish(bikes).forEach(function(bike){
//       if (bike.color === colors) {
//         array.push(bike)
//       }
//     })
