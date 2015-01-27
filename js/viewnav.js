var personalWeb = angular.module('personalWeb', [
    'ui.bootstrap',
    'ngRoute',
    'personalWebControllers'
]);

personalWeb.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'html/home.html',
                controller: 'MeCtrl'
            }).
			when('/project',{
				templateUrl: 'html/project.html',
				contorller: 'ProjectCtrl'
			}).
			when('/contact',{
				templateUrl: 'html/contact.html',
				contorller: 'ContactCtrl'
			}).
            otherwise({
                redirectTo: '/home',
            });
    }]);