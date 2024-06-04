import React from 'react'
import ParagraphText from '../typography/ParagraphText'
import { AboutSectionStyles } from '../../styles/homePage/AboutStyles'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import ImageTexture from '../../constants/imageTexture'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Button from '../buttons/Button'
import { IoBarChartSharp } from "react-icons/io5";
import { GiTwoCoins } from "react-icons/gi";
import { FaBalanceScale, FaChartBar, FaChevronRight, FaMoneyCheck } from 'react-icons/fa'

const About: React.FC<{}> = () => {
    const data = useStaticQuery(graphql`{
      sanityPageContent(_id: {eq: "76023209-46fb-40af-af68-a8035213ac20"}) {
        home_item1
        home_item_desc1
        home_item2
        home_item_desc2
        home_item3
        home_item_desc3
        home_item4
        home_item_desc4
        home_image_about1 {
          asset {
            gatsbyImageData
          }
          alt
        }
        home_image_about2 {
          asset {
            gatsbyImageData
          }
          alt
        }
        home_image_about3 {
          asset {
            gatsbyImageData
          }
          alt
        }
      }
    }`
    )

    const homeData = data.sanityPageContent
    const {home_image_about1, home_image_about2, home_image_about3} = homeData
    return (
        <AboutSectionStyles>
          {/* <section className='first_row'>
            <div className='about_text'>
              <h2>
                Conócenos
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam officia beatae quisquam! Omnis incidunt consequuntur praesentium nobis impedit provident aliquid! Quis laudantium facere repellat, expedita eius recusandae? Ex, saepe ducimus?
              </p>
              <Button variant='more' tag={"a"}>
                Más
              </Button>
            </div>
            <div className='about_image'>
            <StaticImage src='../../images/Profesor-Cesare.jpg' alt='' >
            </StaticImage>
            </div>
          </section> */}
          <section className='first_row'>
              {/* <div className='numbers_container'>
                <div className='numbers_text'>
                  <h2>Por qué elegirnos</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem consequuntur fuga deleniti 
                  </p>
                </div>
                <div className='numbers'>
                  <article>
                    <span className='number'>2012</span>
                    <span className='label'>Fundado en</span>
                  </article>
                  <article>
                    <span className='number'>30</span>
                    <span className='label'>Integrantes</span>
                  </article>
                  <article>
                    <span className='number'>+99</span>
                    <span className='label'>Colaboraciones</span>
                  </article>
                </div>
              </div> */}
              <div className='cards_container'>
                <article className='card'>
                  <FaMoneyCheck className='card_icon'></FaMoneyCheck>
                  <h2>{homeData.home_item1 || 'Texto de ejemplo'}</h2>
                  <p>{homeData.home_item_desc1 ||
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea porro quos deleniti!'
                  }</p>
                </article>
                <article className='card'>
                  <GiTwoCoins className='card_icon'></GiTwoCoins >
                  <h2>{homeData.home_item2 || 'Texto de ejemplo'}</h2>
                  <p>{homeData.home_item_desc2 ||
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea porro quos deleniti!'
                  }</p>
                  </article>
                <article className='card'>
                  <FaBalanceScale className='card_icon'></FaBalanceScale>
                  <h2>{homeData.home_item3 || 'Texto de ejemplo'}</h2>
                  <p>{homeData.home_item_desc3 ||
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea porro quos deleniti!'
                  }</p>
                </article>
                <article className='card'>
                <FaChartBar className='card_icon'></FaChartBar>
                <h2>{homeData.home_item4 || 'Texto de ejemplo'}</h2>
                  <p>{homeData.home_item_desc4 ||
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea porro quos deleniti!'
                  }</p>                
                  </article>
              </div>
          </section>
          <section className="second_row">
            <h1 className='main-title'>Acerca del CIFUP</h1>
          <div className='cards_container'>
                <article className='card'>
                  <Link to='/eventos' >
                {
                  home_image_about1?.asset?.gatsbyImageData ? <GatsbyImage 
                  className='card-image' image={home_image_about1.asset.gatsbyImageData} alt={home_image_about1.alt}></GatsbyImage>
                  :
                <StaticImage
                alt=''
                src='../../images/bg-image.jpg'
                className='card-image'
                ></StaticImage>
                }                  
                <div className='absolute-over-image'>
                  <h2 className='title'>Eventos y talleres</h2>
                  <p>Descúbrelos <FaChevronRight className='icon'/></p>
                  </div>
                  </Link>
                </article>
                <article className='card'>
                  <Link to='/miembros' >
                {
                  home_image_about2?.asset?.gatsbyImageData ? <GatsbyImage  className='card-image' image={home_image_about2.asset.gatsbyImageData} alt={home_image_about2.alt}></GatsbyImage>
                  :
                <StaticImage
                alt=''
                src='../../images/bg-image.jpg'
                className='card-image'
                ></StaticImage>
                }                     
                <div className='absolute-over-image'>
                  <h2 className='title'>Nuestro equipo</h2>
                  <p>
                  Meet the team <FaChevronRight className='icon'/>
                  </p>
                  </div>
                  </Link>
                </article>
                <article className='card'>
                <Link to='/blog' >
                {
                  home_image_about3?.asset?.gatsbyImageData ? <GatsbyImage  className='card-image' image={home_image_about3.asset.gatsbyImageData} alt={home_image_about3.alt}></GatsbyImage>
                  :
                <StaticImage
                alt=''
                src='../../images/bg-image.jpg'
                className='card-image'
                ></StaticImage>
                }                    
                <div className='absolute-over-image'>
                  <h2 className='title'>Finance Blog</h2>
                  <p>Conoce más <FaChevronRight className='icon'/></p>
                  </div>
                  </Link>
                </article>
              </div>
          </section>
        </AboutSectionStyles>
    )
}

export default About