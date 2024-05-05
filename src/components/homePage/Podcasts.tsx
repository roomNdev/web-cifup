import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PodcastsStyles } from '../../styles/homePage/PodcastsStyle';
import ParagraphText from '../typography/ParagraphText';
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import { FaSpotify } from 'react-icons/fa';

function Podcasts() {
    // window.onSpotifyIframeApiReady = (IFrameAPI) => {
    //   const element = document.getElementById('embed-iframe');
    //   const options = {
    //     width: '100%',
    //     height: '160',
    //     uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
    //   };
    //   const callback = (EmbedController) => {
    //     document.querySelectorAll('.episode').forEach(
    //       episode => {
    //         episode.addEventListener('click', () => {
    //           EmbedController.loadUri(episode.dataset.spotifyId)
    //         });
    //       })
    //   };
    //   IFrameAPI.createController(element, options, callback);
    // };
  

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

      <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/show/3ZkpSwIWEOzsc3Q1eetSpn?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  
    </PodcastsStyles>
  );
}

export default Podcasts;
