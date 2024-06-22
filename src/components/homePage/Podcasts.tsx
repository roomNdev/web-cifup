import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { PodcastsStyles } from '../../styles/homePage/PodcastsStyle';
import ParagraphText from '../typography/ParagraphText';
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import { FaSpotify } from 'react-icons/fa';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Button from '../buttons/Button';

function Podcasts() {
  const data = useStaticQuery(graphql`{
    allSanityPodcasts(limit: 2) {
      nodes{
        url
      }
    }
    
      sanityPageContent(_id: {eq: "76023209-46fb-40af-af68-a8035213ac20"}) {
        podcast_featured_image {
          asset {
            gatsbyImageData
          }
          alt
        }
        
        podcast_featured_desc
        podcast_featured_title
      }
    
  }
`);

  const urls = data.allSanityPodcasts.nodes;
  const {podcast_featured_image,
    podcast_featured_desc,
    podcast_featured_title,} =  data.sanityPageContent

  return (
    <PodcastsStyles>
      <h1>Podcast</h1>
  
      <h2 className='title'>{podcast_featured_title || 'Conoce nuestro Podcast!'}</h2>
      <p className='description'>{podcast_featured_desc || '(esto es editable btw) Aqui hablamos de ciertos temas que nos conciernen de la actualidad, finanzas y sociedad, descubre nuestro contenido'}</p>
    <div className='content'>

      {/* <div className='editable_item'> */}
        
      {/* {
        podcast_featured_image?.asset?.gatsbyImageData ? <GatsbyImage image={podcast_featured_image.asset.gatsbyImageData} alt={podcast_featured_image.alt} 
        className='image'></GatsbyImage>
        :
      <StaticImage
       alt=''
       src='../../images/bg-image.jpg'
       className='image'
      ></StaticImage>
      }
            {/* <StaticImage src='../../images/Profesor-Cesare.jpg' alt='' className='image'></StaticImage> */}
            {/* <div className='data'> */}
            {/* </div> */}
      {/* </div> */}
      {/* <div className='episodes'>
      {
        urls.map(item => {
          return <div dangerouslySetInnerHTML={{__html: item.url}}></div>
        })
      }  
      </div> */}
    </div>
      <Button tag={'div'} variant='primary' className="mas">
        <Link to='/podcast'>Ver más</Link>
      </Button>
    </PodcastsStyles>
  );
}

export default Podcasts;
