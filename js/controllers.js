var personalWebControllers = angular.module('personalWebControllers', []);

personalWebControllers.controller("HomeCtrl", ["$scope", function ($scope) {
	$scope.currentTab="me";
	$scope.isActive=function(tab){
		return $scope.currentTab==tab;
	};
	$scope.toggle=function(tab){
		$scope.currentTab=tab;
	};
}]);

personalWebControllers.controller("MeCtrl", ["$scope",  function ($scope) {

}]);

personalWebControllers.controller("ProjectCtrl", ["$scope", function ($scope) {
	$scope.projects=[{name:'GradeTacker', url:'project/GradeTacker/index.html', intro:"this is GradeTacker"},
	{name:'AnxietyResearchApp', url:'project/AnxietyResearchApp/index.html', intro:"this is AnxietyResearchApp"}];
}]);

personalWebControllers.controller("ContactCtrl", ["$scope", function ($scope) {

}]);

