import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"

import HeroSection from '../../components/homePage/HeroSection';
import Seo from '../../components/seo';
import InstagramSection from "../../components/homePage/InstagramSection";
import MainEvents from "../../components/events/MainEvents";
import SimpleSlider from "../../components/Slider";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { SliderStyles } from "../../styles/SliderStyles";
import { Carousel } from "nuka-carousel";
import StudyCaseSection from "../../components/events/StudyCaseSection";

const IndexPage: React.FC<PageProps>  = () => {
  const data = useStaticQuery(graphql`{
    sanityPageContent(_id: {eq: "76023209-46fb-40af-af68-a8035213ac20"}) {
      events_image {
        asset {
          gatsbyImageData
        }
        alt
      }
      events_hero
      gallery_images {
        asset {
          gatsbyImageData
        }
        gallery_image_title
        gallery_image_desc
      }
    }
  }`
)
  const images = data.sanityPageContent.gallery_images
  const eventsData = data.sanityPageContent
  return (
  <>
    <Seo title={"Inicio"} description={"Página de inicio de Lee UP, una organización estudiantil de la Universidad del Pacífico"}/>
    <HeroSection img={eventsData.events_image.asset.gatsbyImageData} alt={eventsData.events_image.alt} title={eventsData.events_hero} />
    {/* <div className="container"> */}
      <MainEvents/>
      <InstagramSection/>
      <SliderStyles >
        <h1>Casos de estudio</h1>
      </SliderStyles>
      <StudyCaseSection/>
      <SliderStyles >
        <h1>Gallery</h1>
      <Carousel className='carousel' showArrows={true} swiping={true}  autoplay scrollDistance={'slide'} autoplayInterval={15000} wrapMode='nowrap'>
        {
          images && images.map(image => {
            return (
              <div className="image-container">
                  {
                    image?.asset?.gatsbyImageData ? <GatsbyImage 
                    className='card-image' image={image.asset.gatsbyImageData} alt={image.gallery_image_title}></GatsbyImage>
                    :
                  <StaticImage
                  alt=''
                  src='../../images/bg-image.jpg'
                  className='card-image'
                  ></StaticImage>
                  }     
                    <div className="image-text">
              <h2>{image.gallery_image_title ||'Descripcion de la imagen'}</h2>
              <p>{image.gallery_image_desc || 'Descripcion de la imagen'}</p>
                    </div>
                </div>
            )
          })
        }
  {/* <StaticImage
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
      </div> */}
  
     </Carousel>

      </SliderStyles>
    {/* </div> */}
  </>
)};

export default IndexPage;

export const Head: HeadFC = () => <title>CIFUP</title>