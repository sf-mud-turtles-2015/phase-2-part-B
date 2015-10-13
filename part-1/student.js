// Student function that takes the student's name and scores, averages scores, and calculates letter grade.
var Student = function() {
	this.firstName = 'Lysette';
	this.scores = [ 100, 100, 100, 4, 100 ];
	this.averageScore = function() {
		var sum = this.scores.reduce(function(a, b) { return a + b; });
		var average = Math.floor (sum / this.scores.length);
		return average;
	};
	this.letterGrade = function() {
		var ave = this.averageScore() 
		if (ave > 89) {
			return "A";
		}
		if (ave > 79 && ave < 90) {
			return "B";
		}
		if (ave > 69 && ave < 80) {
			return "C";
		}
		if (ave > 59 && ave < 70) {
			return "D";
		}
		else {
			return "F";
		}
	};
};

