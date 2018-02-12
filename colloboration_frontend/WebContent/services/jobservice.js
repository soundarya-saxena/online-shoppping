/**
 * JobService
 */
	app.factory('JobService',function($http){
	var jobService={}
	var BASE_URL = "http://localhost:8084/colloboration_middleware"
	jobService.addJob=function(job){
		return $http.post(BASE_URL + "/addjob",job)
	}
		return jobService;
})
	