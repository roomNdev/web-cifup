import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';

function HeroSection({img, alt, title}) {
  // const {img, alt, title} = props

  return (
    <HeroSectionStyles>
      {
        img ? <GatsbyImage image={img} alt={alt} 
        class='bg-image' placeholder='blurred'></GatsbyImage>
        :
      <StaticImage
      placeholder='blurred'
       alt=''
       src='../../images/bg-image.jpg'
       class='bg-image'
      ></StaticImage>
      }
      <section className='hero-text'>
        <h1>{title || 'Circulo de Inversion y Finanzas de la Universidad del Pacifico'}</h1>
      </section>
    </HeroSectionStyles>
  );
}

export default HeroSection;
