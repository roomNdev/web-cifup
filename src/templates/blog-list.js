import { graphql } from 'gatsby';
import React from 'react';
import PageHeader from '../components/PageHeader.tsx';
import Seo from '../components/seo.tsx';
import PageSpace from '../components/PageSpace.tsx';
import BlogGrid from '../components/blog/BlogGrid.tsx';
import Pagination from '../components/Pagination.tsx';
import HeroSection from '../components/homePage/HeroSection.tsx';
import { BlogStyles } from '../styles/blog/BlogStyles.ts';
// import Filters from '../components/blog/Filters.tsx';

// Change categories por category y hacer que solo puedan ser 2
export const BlogsQuery = graphql`
  query BlogsQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(sort: { publishedAt: DESC }, limit: $limit, skip: $offset) {
      nodes {
        id
        title
        publishedAt
        excerpt {
          _rawChildren
        }
        slug {
          current
        }
        author {
          name
          slug {
            current
          }
          role
          profileImage {
            asset {
              gatsbyImageData
            }
          }
        }
        coverImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function Blogs({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes;

  return (
    <>
      <Seo title="Blogs" />
      <PageSpace top={80} bottom={100}>
        <HeroSection />
        <div className="container">
          <BlogStyles>
            <PageHeader title="Nuestro blog" />
            <p className="desc">
              This is a blog from students to students. We want to share
              information and give food for thought. Here you can find
              recommendation lists, interviews with alumni, professors and
              industry professionals, study and research materials, as well as
              some fun facts. Enjoy and do not hesitate to reach out in case you
              have a topic we need to write about.
            </p>
            <BlogGrid blogs={blogs} />
            {numberOfPages > 1 && (
              <Pagination
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                baseURL="/blog"
              />
            )}
          </BlogStyles>
        </div>
      </PageSpace>
    </>
  );
}

export default Blogs;
