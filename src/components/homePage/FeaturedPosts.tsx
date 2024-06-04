import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle, Title } from '../typography/Title';
import { FeaturedWritingStyles } from '../../styles/poem/FeaturedWritingStyles';
import BlogGrid from '../blog/BlogGrid';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import Button from '../buttons/Button';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

function FeaturedPosts() {
  const data = useStaticQuery(graphql`
  {
    allSanityBlog(sort: {publishedAt:DESC}, limit: 3) {
      nodes {
            title
            slug {
              current
            }
            author {
              name
              role
              slug {
                current
              }
              profileImage{
                asset {
                  gatsbyImageData
                }
              }
            }
            coverImage{
              asset {
                gatsbyImageData
              }
            }
            excerpt{
              _rawChildren
            }
          }
        
      }
        sanityPageContent(_id: {eq: "76023209-46fb-40af-af68-a8035213ac20"}) {
          home_featured_image {
            asset {
              gatsbyImageData
            }
            alt
          }
          home_featured_desc
          home_featured_title
        }
      
    }
  `);
  const featuredPosts = data.allSanityBlog.nodes;
    const {home_featured_image,
      home_featured_desc,
      home_featured_title,} =  data.sanityPageContent

  return (
    <FeaturedBlogsStyles>
      <h1>Manténte al día con nuestro blog!</h1>
      <section className='post_container'>
      <article className='post'>
              {/* <GatsbyImage 
                image=
                className='post_image'
              /> */}
      {
        home_featured_image ? <GatsbyImage image={home_featured_image.asset.gatsbyImageData} alt={home_featured_image.alt} 
        class='post_image'></GatsbyImage>
        :
      <StaticImage
       alt=''
       src='../../images/bg-image.jpg'
       class='post_image'
      ></StaticImage>
      }
          <div>
            <h2 className='post_title'>{home_featured_title ||'Este item es editable!'}</h2>
            <p className='post_abstract'>{home_featured_desc ||'A customizable first item'}</p>
          </div>
      </article>
      {
        featuredPosts.map((item) => { 
          return (
            <article className='post'>
              <GatsbyImage 
                image={item.coverImage.asset.gatsbyImageData}
                alt={item.coverImage.alt}
                className='post_image'
              />
              <div>
                <h2 className='post_title'>{item.title}</h2>
                <p className='post_abstract'>{item.excerpt[0]._rawChildren?.at(0).text} ...</p>
              </div>
            </article>
          )
        })
      }
      </section>
    </FeaturedBlogsStyles>
  );
}

export default FeaturedPosts;
