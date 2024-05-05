import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import HeroSection from '../../components/homePage/HeroSection';
import Seo from '../../components/seo';
import InstagramSection from "../../components/homePage/InstagramSection";
import MainEvents from "../../components/events/MainEvents";

const IndexPage: React.FC<PageProps>  = () => {
  return (
  <>
    <Seo title={"Inicio"} description={"Página de inicio de Lee UP, una organización estudiantil de la Universidad del Pacífico"}/>
    <HeroSection />
    {/* <div className="container"> */}
      <MainEvents/>
      <InstagramSection/>
    {/* </div> */}
  </>
)};

export default IndexPage;

export const Head: HeadFC = () => <title>CIFUP</title>