/**
 * Angular module
 */
var app=angular.module("app",['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/editprofile',{
		templateUrl:'views/updateform.html',
		controller:'UserController'
	})
	.when('/home',{
		templateUrl:'views/home.html'
	})
	.otherwise({
		templateUrl:'views/login.html'
	})
	
})
app.run(function($rootScope,$cookieStore,UserService,$location){

	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get('loggedInUser')
	
		$rootScope.logout=function(){
		UserService.logout().then(function(response){
			$rootScope.successMessage="Loggedout Successfully.."
			delete $rootScope.loggedInUser
			$cookieStore.remove("loggedInUser")
				$location.path('/login')
		},function(response){
			$rootScope.errorMessage="Please login.."
				$location.path('/login')
		})
		
	}
})