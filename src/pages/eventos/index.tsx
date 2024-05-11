import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import HeroSection from '../../components/homePage/HeroSection';
import Seo from '../../components/seo';
import InstagramSection from "../../components/homePage/InstagramSection";
import MainEvents from "../../components/events/MainEvents";
import SimpleSlider from "../../components/Slider";
import { StaticImage } from "gatsby-plugin-image";
import { SliderStyles } from "../../styles/SliderStyles";
import { Carousel } from "nuka-carousel";

const IndexPage: React.FC<PageProps>  = () => {
  return (
  <>
    <Seo title={"Inicio"} description={"Página de inicio de Lee UP, una organización estudiantil de la Universidad del Pacífico"}/>
    <HeroSection />
    {/* <div className="container"> */}
      <MainEvents/>
      <InstagramSection/>
      <SliderStyles >
      <Carousel className='carousel' showArrows={true} autoplay scrollDistance={'slide'} autoplayInterval={15000} wrapMode='nowrap'>
      <div className="image-container">
  <StaticImage
       alt=''
       src='../../images/bg-image.jpg'
       className='demo-slide'
      ></StaticImage>
      <div className="image-text">
<h2>Descripcion de la imagen</h2>
<p>Descripcion de la imagen</p>
      </div>
  </div>
    <div className="image-container">
  <StaticImage
       alt=''
       src='../../images/bg-image.jpg'
       className='demo-slide'
      ></StaticImage>
      <div className="image-text">
<h2>Descripcion de la imagen</h2>
<p>Descripcion de la imagen</p>
      </div>
  </div>
  <div className="image-container">
  <StaticImage
       alt=''
       src='../../images/bg-image.jpg'
       className='demo-slide'
      ></StaticImage>
      <div className="image-text">
<h2>Descripcion de la imagen</h2>
<p>Descripcion de la imagen</p>
      </div>
  </div>
  <div className="image-container">
  <StaticImage
       alt=''
       src='../../images/bg-image.jpg'
       className='demo-slide'
      ></StaticImage>
      <div className="image-text">
<h2>Descripcion de la imagen</h2>
<p>Descripcion de la imagen</p>
      </div>
  </div>
  
     </Carousel>

      </SliderStyles>
    {/* </div> */}
  </>
)};

export default IndexPage;

export const Head: HeadFC = () => <title>CIFUP</title>