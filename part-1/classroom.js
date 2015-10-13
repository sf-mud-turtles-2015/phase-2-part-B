var Classroom = function(students) {
	this.students = students;
	this.find = function(student) {
		for	(var index = 0; index < this.students.length; index++) {
			if (this.students[index].firstName == student) {
				return this.students[index];
			}
		}	
	};
	this.honorRollStudents = function() {
		var container = [];
		for	(var index = 0; index < this.students.length; index++) {
			if ((this.students[index].averageScore()) > 94) {
				container.push(this.students[index]);
			}
		}
		return container;	
	};
};
