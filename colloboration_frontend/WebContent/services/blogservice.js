/**
 * BlogService
 */
app.factory('BlogService',function($http){
	var blog={}
		var BASE_URL="http://localhost:8084/colloboration_middleware"
			
			blog.addBlog=function(blog){
			return $http.post(BASE_URL + "/addblogpost",blog)
			
	}
		return blog;
})