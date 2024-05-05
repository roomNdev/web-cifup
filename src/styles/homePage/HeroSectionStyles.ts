import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
height: calc(70vh - 100px);
  .bg-image {
    position: absolute;
    top: 0;
    z-index: -10;
    height: 70vh;
  }
  .hero-text {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        text-align: center;
        width: 70%;
        font-size: 6rem;
    }
  }
  @media (max-width: 900px) {
    .hero-text{
      h1 {
        font-size: 4.6rem;
      }
    }
  }
  @media (max-width: 600px) {
    .hero-text {
      h1 {
        font-size: 2.8rem;
      }
    }
  }

  @media (max-width: 400px) {
    .bg-image {
      /* height */
      img {
        object-fit: scale-down;
      }
    }
  }

`;
