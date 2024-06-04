import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { PodcastsStyles } from '../../styles/homePage/PodcastsStyle';
import ParagraphText from '../typography/ParagraphText';
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import { FaSpotify } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

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
      {/* <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>

      <div id="embed-iframe"></div>

      <div className="episodes">
    <button className="episode" data-spotify-id="spotify:episode:7makk4oTQel546B0PZlDM5">
      My Path to Spotify: Women in Engineering
    </button>
    <button className="episode" data-spotify-id="spotify:episode:43cbJh4ccRD7lzM2730YK3">
      What is Backstage?
    </button>
    <button className="episode" data-spotify-id="spotify:episode:6I3ZzCxRhRkNqnQNo8AZPV">
      Introducing Nerd Out@Spotify
    </button>
  </div> */}
  
      <div className='editable_item'>
        
      {
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
            <div className='data'>
              <h2 className='title'>{podcast_featured_title || 'Conoce nuestro Podcast!'}</h2>
              <p className='description'>{podcast_featured_desc || '(esto es editable btw) Aqui hablamos de ciertos temas que nos conciernen de la actualidad, finanzas y sociedad, descubre nuestro contenido'}</p>
            </div>
      </div>
      {
        urls.map(item => {
          return <div dangerouslySetInnerHTML={{__html: item.url}}></div>
        })
      }  
    </PodcastsStyles>
  );
}

export default Podcasts;
