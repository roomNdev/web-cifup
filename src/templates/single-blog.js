import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { format } from 'date-fns';
import { BiHeart } from 'react-icons/bi';
import { FiCalendar} from 'react-icons/fi';
import PageSpace from '../components/PageSpace.tsx';
import ParagraphText from '../components/typography/ParagraphText.tsx';
import { Title } from '../components/typography/Title.tsx';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles.ts';
import MyPortableText from '../components/MyPortableText.tsx';
import Seo from '../components/seo.tsx';
import ScrollToTop from '../constants/ScrollTop';
import FeaturedPosts from '../components/homePage/FeaturedPosts.tsx'

export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      likes
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

  const likes = data.sanityBlog.likes

  console.log(blog);
return (<>
      <ScrollToTop></ScrollToTop>
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
            {blog.author.map(auth => {
              return (
<ParagraphText className="author">
            <GatsbyImage
              image={auth.profileImage.asset.gatsbyImageData}
              alt={`Foto de perfil de ${auth.name}`}
              className="author__img"
            />
              <Link to={`/miembros/${auth.slug.current}`}>
                {auth.name}
              </Link>
            </ParagraphText>

              )
            })}
            {
              likes !== null && (
            <ParagraphText className="likes">
              <BiHeart />
              {likes}
            </ParagraphText>

              )
            }
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
          <FeaturedPosts></FeaturedPosts>
      {/* <JustFeatured></JustFeatured> */}
</>)
}

export default SingleBlog;
