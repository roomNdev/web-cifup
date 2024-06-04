import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"

import HeroSection from '../components/homePage/HeroSection';
import About from "../components/homePage/About";
import Podcasts from "../components/homePage/Podcasts";
import Seo from '../components/seo';
import InstagramSection from "../components/homePage/InstagramSection";
import FeaturedPosts from "../components/homePage/FeaturedPosts";

const IndexPage: React.FC<PageProps>  = () => {
  const data = useStaticQuery(graphql`{
    sanityPageContent(_id: {eq: "76023209-46fb-40af-af68-a8035213ac20"}) {
      home_hero
      home_image {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
  }
  `);
  const homeData = data.sanityPageContent;


  return (
  <>
    <Seo title={"Inicio"} description={"Página de inicio de Lee UP, una organización estudiantil de la Universidad del Pacífico"}/>
    <HeroSection img={homeData.home_image.asset.gatsbyImageData} alt={homeData.home_image.alt} title={homeData.home_hero}/>
    {/* <div className="container"> */}
      <About/>
      <InstagramSection/>
      <FeaturedPosts/>
      <Podcasts/>
    {/* </div> */}
  </>
)};

export default IndexPage;

export const Head: HeadFC = () => <title>CIFUP</title>