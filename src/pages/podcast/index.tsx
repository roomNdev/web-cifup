import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"

import HeroSection from '../../components/homePage/HeroSection';
import Seo from '../../components/seo';
import { PodcastsStyles } from "../../styles/homePage/PodcastsStyle";

const IndexPage: React.FC<PageProps>  = () => {
  const data = useStaticQuery(graphql`{
    allSanityPodcasts(filter: {}) {
      nodes{
        url
      }
    }
    sanityPageContent(_id: {eq: "76023209-46fb-40af-af68-a8035213ac20"}) {
      podcast_hero
      podcast_desc
      podcast_image {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
  }
`);

  const urls = data.allSanityPodcasts.nodes;
  const podcastData = data.sanityPageContent
  console.log(urls[0].url);
  // const items = urls.map(item => {
  //   return <>{item.url}</>
  // });
  return (
  <>
    <Seo title={"Inicio"} description={"Página de inicio de CIFUP, una organización estudiantil de la Universidad del Pacífico"}/>
    <HeroSection alt={podcastData?.podcast_image?.alt} img={podcastData?.podcast_image?.asset?.gatsbyImageData} title={podcastData?.podcast_hero}/>
    {/* <div className="container"> */}
      <PodcastsStyles>
        <div>
          <h1>Podcasts</h1>
          <p>{podcastData?.podcast_desc || `CIFUP realiza distintos eventos para promover la cultura e información del mundo financiero. 
              Aquí podrás obtener mas información acerca de fechas, horarios y ubicacion.`}
          </p>
        </div>
        <div className="content">
          <div className="episodes">
      {
        urls.map(item => {
          return <div dangerouslySetInnerHTML={{__html: item.url}}></div>
        })
      }
          </div>
        </div>
      </PodcastsStyles>
    {/* </div> */}
  </>
)};

export default IndexPage;

export const Head: HeadFC = () => <title>CIFUP</title>