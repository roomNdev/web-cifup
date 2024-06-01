import React, { useEffect, useRef, useState } from 'react';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';
import Filters from './Filters';
import Pagination from '../Pagination';
import InstagramSection from '../homePage/InstagramSection';
import IframeResizer from '@iframe-resizer/react';
import Search from '../search/SearchModal';

function JustPostGrid({ blogs, numberOfPages, currentPage }) {
 
  return (
    <BlogGridStyles>
      <div className='posts'>
        {
          blogs.map((blog) => (
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
      
      {(numberOfPages > 1) && (
              <Pagination
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                baseURL="/blog"
              />
            )}

    </BlogGridStyles>
  );
}

export default JustPostGrid;
