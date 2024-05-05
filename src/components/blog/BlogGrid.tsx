import React, { useState } from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';
import Filters from './Filters';

function BlogGrid({ blogs }) {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const handleChangeFilters = (posts) => {
    setFilteredBlogs(posts)
  }

  return (
    <BlogGridStyles>
      <Filters handleChangeFilters={handleChangeFilters} posts={blogs}/>
      <div className='posts'>
      {filteredBlogs &&
        filteredBlogs.map((blog) => (
          <BlogItem
            key={blog.id}
            path={blog.slug.current}
            title={blog.title}
            categories={blog.categories}
            author={blog.author}
            image={{
              imageData: blog.coverImage.asset.gatsbyImageData,
              altText: blog.coverImage.alt,
            }}
            excerpt={blog.excerpt}
            publishedAt={blog.publishedAt}
          />
        ))}
      </div>
      
    </BlogGridStyles>
  );
}

export default BlogGrid;
