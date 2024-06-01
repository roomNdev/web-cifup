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
    }
  `);
  const featuredPosts = data.allSanityBlog.nodes;
  return (
    <FeaturedBlogsStyles>
      <h1>Manténte al día con nuestro blog!</h1>
      <section className='post_container'>
      <article className='post'>
              {/* <GatsbyImage 
                image=
                className='post_image'
              /> */}
        <StaticImage
          alt=''
          src='../../images/bg-image.jpg'
          class='post_image'
          ></StaticImage>
          <div>
            <h2 className='post_title'>Este item es editable!</h2>
            <p className='post_abstract'>A customizable first item</p>
          </div>
      </article>
      {
        featuredPosts.map((item) => { 
          return (
            <article className='post'>
              <GatsbyImage 
                image={item.coverImage.asset.gatsbyImageData}
                className='post_image'
              />
              <div>
                <h2 className='post_title'>{item.title}</h2>
                <p className='post_abstract'>{item.excerpt[0]._rawChildren?.at(0).text.slice(0, 60)} ...</p>
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
