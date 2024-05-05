import React from 'react'
import ParagraphText from '../typography/ParagraphText'
import { AboutSectionStyles } from '../../styles/homePage/AboutStyles'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import ImageTexture from '../../constants/imageTexture'
import { graphql, useStaticQuery } from 'gatsby'
import Button from '../buttons/Button'
import { IoBarChartSharp } from "react-icons/io5";
import { FaBalanceScale, FaMoneyCheck } from 'react-icons/fa'

const About: React.FC<{}> = () => {
    const data = useStaticQuery(graphql`{
        sanityPrincipalPhoto(title: {eq: "Foto Principal"}) {
            title
            principalPhoto {
              asset {
                gatsbyImageData
              }
          }
        }
      }`
    )

    const image = data.sanityPrincipalPhoto

    return (
        <AboutSectionStyles>
          <section className='first_row'>
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
          </section>
          <section className='second_row'>
              <div className='numbers_container'>
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
              </div>
              <div className='cards_container'>
                <article className='card'>
                  <FaMoneyCheck className='card_icon'></FaMoneyCheck>
                  <h2>Texto de ejemplo</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea porro quos deleniti!</p>
                </article>
                <article className='card'>
                  <FaBalanceScale className='card_icon'></FaBalanceScale>
                  <h2>Texto de ejemplo</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea porro quos deleniti!</p>
                </article>
                <article className='card'>
                <IoBarChartSharp></IoBarChartSharp>
                  <h2>Texto de ejemplo</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea porro quos deleniti!</p>
                </article>
              </div>
          </section>
        </AboutSectionStyles>
    )
}

export default About