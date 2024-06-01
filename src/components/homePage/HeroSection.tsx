import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';

function HeroSection(props) {
  return (
    <HeroSectionStyles>
      <StaticImage
       alt=''
       src='../../images/bg-image.jpg'
       class='bg-image'
      ></StaticImage>
      <section className='hero-text'>
        <h1>{props.title || 'Circulo de Inversion y Finanzas de la Universidad del Pacifico'}</h1>
      </section>
    </HeroSectionStyles>
  );
}

export default HeroSection;
