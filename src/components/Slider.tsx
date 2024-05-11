import { Carousel } from 'nuka-carousel';
import React from 'react';

export default function SimpleSlider({children}) {
  return (
  <Carousel className='carousel' autoplay showArrows scrollDistance={'slide'} swiping autoplayInterval={10000} wrapMode='wrap'>
    {children}
  </Carousel>)
}
