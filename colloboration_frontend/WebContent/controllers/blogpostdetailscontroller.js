/**
 * BlogPostDetailController
 */
app.controller('BlogPostDetailController',function($scope,$routeParams,$location,BlogService,$sce,$rootScope){
	var id=$routeParams.id;
	
	BlogService.getBlog(id).then(function(response){
		$scope.blogPost=response.data //select * from blogpost where id=?
		$scope.title=$sce.trustAsHtml($scope.blogPost.blogTitle)
		$scope.content=$sce.trustAsHtml($scope.blogPost.blogContent);//blogContent HTML tags
	},function(response){
		$rootScope.error=response.data;
		if(response.status==401)
			$location.path('/login')
	})

	BlogService.hasUserLikedPost(id).then(function(response) {
		if (response.data == '') {
			$scope.isLiked = false
		} else {
			$scope.isLiked = true 
		}
	}, function(response) {
		$rootScope.error = response.data;
		if (response.status == 401)
			$location.path('/login')
	})
	

	$scope.updateLikes=function(id){
		BlogService.updateLikes(id).then(
				function(response){
					$scope.blogPost=response.data
					$scope.isLiked=!$scope.isLiked
				},
				function(response){
					$rootScope.error = response.data;
					if (response.status == 401)
						$location.path('/login')
				})
	}
	

})
