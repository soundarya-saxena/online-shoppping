/**
 * UserService
 */
app.factory('UserService',function($http){
	var userService={}
	
	var BASE_URL = "http://localhost:8084/colloboration_middleware"
	
	userService.register=function(user){
	 return $http.post(BASE_URL + "/register",user)
	}
	
	userService.login=function(user){
		return $http.post(BASE_URL + "/login",user)
	}
	
	
	return userService;
})