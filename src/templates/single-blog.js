import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
import JustFeatured from '../components/homePage/JustFeatured.tsx'
import { urlFor } from '../utils/sanityClient';

export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      likes
      publishedAt
      coverImage {
        asset {
          gatsbyImageData
        }
          alt
      }
      _rawBody
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
  
  const coverImage = getImage(blog.coverImage.asset.gatsbyImageData);
  const imageUrl = urlFor(blog.coverImage.asset.gatsbyImageData);
  // console.log(imageUrl);
  // console.log(blog);
  return (<>
      <ScrollToTop></ScrollToTop>
<SingleBlogStyles>
      <Seo title={blog.title} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="blog-header">
            <div className='image__container'>
              <GatsbyImage
                image={coverImage}
                alt={blog.coverImage.alt}
                className="blog-cover-image"
                />
            </div>
            <ParagraphText className="publishedAt">
              <FiCalendar />
              {format(new Date(blog.publishedAt), 'p, MMMM dd, yyyy')}
            </ParagraphText>
            {blog.author.map(auth => {
                const imgAuthor = auth.profileImage.asset.gatsbyImageData
              return (
<ParagraphText className="author">
            <GatsbyImage
              image={imgAuthor}
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
          {/* <FeaturedPosts></FeaturedPosts> */}
      <JustFeatured></JustFeatured>
</>)
}

export default SingleBlog;
