import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { format } from 'date-fns';
import { BiCategory } from 'react-icons/bi';
import { FiCalendar, FiStar, FiUser } from 'react-icons/fi';
import PageSpace from '../components/PageSpace.tsx';
import ParagraphText from '../components/typography/ParagraphText.tsx';
import { Title } from '../components/typography/Title.tsx';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles.ts';
import MyPortableText from '../components/MyPortableText.tsx';
import Seo from '../components/seo.tsx';
import Button from '../components/buttons/Button.tsx'
import JustFeatured from '../components/homePage/JustFeatured.tsx'

export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      bookAuthorBio
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      author {
        name
        slug {
          current
        }
        profileImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function SingleBlog({ data }) {
  const blog = data.sanityBlog;
  const points = Math.round(blog.points || 1) 

  const stars = Array.from(Array(points).keys())


return (<>
<SingleBlogStyles>
      <Seo title={blog.title} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="blog-header">
            <div className='image__container'>
              <GatsbyImage
                image={blog.coverImage.asset.gatsbyImageData}
                alt={blog.coverImage.alt}
                className="blog-cover-image"
              />
            </div>
            <ParagraphText className="publishedAt">
              <FiCalendar />
              {format(new Date(blog.publishedAt), 'p, MMMM dd, yyyy')}
            </ParagraphText>
            
            
            <ParagraphText className="author">
            <GatsbyImage
              image={blog.author.profileImage.asset.gatsbyImageData}
              alt={`Foto de perfil de ${blog.author.name}`}
              className="author__img"
            />
              <Link to={`/miembros/${blog.author.slug.current}`}>
                {blog.author.name}
              </Link>
            </ParagraphText>
          </div>
          
          <Title className="title">{blog.title}</Title>
          <hr className="hr" />
          <div className="body">
            <MyPortableText value={blog._rawBody} />
          </div>
          <div className='button__wrapper'>
          {/* <Link to='/'>
            <Button variant='more'>
              {'< Inicio'}
            </Button>
          </Link> */}
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
      <JustFeatured></JustFeatured>
</>)
}

export default SingleBlog;
