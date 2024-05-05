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
  }
`);

  const urls = data.allSanityPodcasts.nodes;
  console.log(urls[0].url);
  // const items = urls.map(item => {
  //   return <>{item.url}</>
  // });
  return (
  <>
    <Seo title={"Inicio"} description={"Página de inicio de Lee UP, una organización estudiantil de la Universidad del Pacífico"}/>
    <HeroSection />
    <div className="container">
      <PodcastsStyles>
      {
        urls.map(item => {
          return <div dangerouslySetInnerHTML={{__html: item.url}}></div>
        })
      }
      </PodcastsStyles>
    </div>
  </>
)};

export default IndexPage;

export const Head: HeadFC = () => <title>CIFUP</title>