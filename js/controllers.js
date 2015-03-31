var personalWebControllers = angular.module('personalWebControllers', []);

personalWebControllers.controller("HomeCtrl", ["$scope", function ($scope) {
	
}]);


personalWebControllers.controller("ProjectCtrl", ["$scope", function ($scope) {
	$scope.projects=[{name:'GradeTacker', url:'project/GradeTacker/index.html', intro:"The user makes an initial goal GPA at the beginning of the term. Throughout the term they can add quizzes, midterm, assignments and final exam and enter their respective weights. The user can then enter his mark for each assessment and the app will provide a nice interface to show the student's progress and how it compares to his goal and return future grades to reach the desired GPA. The user can add up to 5 courses and the app will calculate the current GPA and provide other information, such as goals and progress."},
	{name:'AnxietyResearchApp', url:'project/AnxietyResearchApp/index.html', intro:"A psychoeducation application which was used in a thesis study at WLU to test whether mobile applications can be more effective than self-help books for students with elevated levels of anxiety."}];
}]);


