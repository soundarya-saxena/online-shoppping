package com.niit.dao;

import java.util.List;

import com.niit.model.BlogPost;

public interface BlogPostDao {
	
	void addBlogPost(BlogPost blogPost);
	List<BlogPost> getBlogs(boolean approved);
	BlogPost getBlogById(int id);
}
