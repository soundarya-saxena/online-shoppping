/**
 * JobController
 */
	app.controller('JobController',function($scope,JobService,$location) {
	$scope.addJob = function() {
			console.log($scope.job)
			JobService.addJob($scope.job).then(function(response) {
			alert('Job details posted successfully')
			$location.path('/home')
		}, function(response) {
			$scope.error=response.data;
			if (response.status==401) 
					$location.path('/login')
					
				
			})
		}
	})
	