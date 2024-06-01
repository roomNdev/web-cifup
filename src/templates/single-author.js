import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import JustPostGrid from '../components/blog/JustPostGrid.tsx';
import MyPortableText from '../components/MyPortableText.tsx';
import PageSpace from '../components/PageSpace.tsx';
import Seo from '../components/seo.tsx';
import { Title } from '../components/typography/Title.tsx';
import { SingleAuthorStyles } from '../styles/author/SingleAuthorStyles.ts';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ParagraphText from '../components/typography/ParagraphText.tsx';


export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      bio
      linkedin
      role
      area {
        name
      }
      profileImage {
        asset {
          gatsbyImageData
        }
      }
    }
    allSanityBlog(filter: { author: { elemMatch: { id: { eq: $id } } } }) {
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
          role
          slug {
            current
          }
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

function SingleAuthor({ data }) {
  const author = data.sanityAuthor;
  const blogs = data.allSanityBlog.nodes;
  console.log(blogs);
  return (
    <PageSpace top={0} bottom={100}>
      <Seo title={author.name} />
      
      <SingleAuthorStyles>
          <div className="author-header">
            <GatsbyImage
              image={author.profileImage.asset.gatsbyImageData}
              alt={author.name}
              className="profileImage"
            />
            <div className='data'>
                
              <Title className="name">{author.name}</Title>
            <ParagraphText className="bio">
              {author.bio}
            </ParagraphText>
            </div>
          </div>
        </SingleAuthorStyles>
        <SingleAuthorStyles>
      <div className="container">
          <div className="author__socialList">
            {author.facebook && <a href={`https://www.${author.facebook.trim()}`} target='_blank'  rel='noreferrer'><FaFacebook/></a>}
            {author.instagram && <a href={`https://www.instagram.com/${author.instagram.trim()}`} target='_blank'rel='noreferrer'><FaInstagram/></a>}
            {author.linkedin &&  <a href={`https://www.${author.linkedin.trim()}`} target='_blank'  rel='noreferrer'><FaLinkedin/></a>}
        </div>
          {blogs[0] 
            ?  <>
            <Title className="poems__title">Reseñas</Title>
            <JustPostGrid blogs={blogs} />  
            </>
            :   <>
            <hr className="hr" />
            <Title className="poems__title">Reseñas</Title>
            <ParagraphText className="no__post">No hay reseñas todavia</ParagraphText>
            </>
          }
      </div>
        </SingleAuthorStyles>
    </PageSpace>
  );
}

export default SingleAuthor;
