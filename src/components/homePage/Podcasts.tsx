import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PodcastsStyles } from '../../styles/homePage/PodcastsStyle';
import ParagraphText from '../typography/ParagraphText';
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import { FaSpotify } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';

function Podcasts() {
  const data = useStaticQuery(graphql`{
    allSanityPodcasts(limit: 3) {
      nodes{
        url
      }
    }
  }
`);

  const urls = data.allSanityPodcasts.nodes;

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
      {
        urls.map(item => {
          return <div dangerouslySetInnerHTML={{__html: item.url}}></div>
        })
      }  
    </PodcastsStyles>
  );
}

export default Podcasts;
