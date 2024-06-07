import styled from 'styled-components';

export const BlogGridStyles = styled.div`
  /* margin-top: 3.5rem;
  display: grid;
  gap: 5rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 280px);
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 250px);
    gap: 3rem;
  } */
    padding: 4rem;
    width: 100%;
  .widget-container {
    width: 100%;
    height: auto;
    /* aspect-ratio: calc(1); */
  }
  .ig-new{ 
    width: 325px;
    height: 325px;
    img {
    object-fit: cover  !important;
    };
  }

  .posts {

    display: flex;
    margin: 0 auto;
    margin-top: 3.5rem;
    gap: 10px;
    /* justify-content: center; */
    flex-wrap: wrap;
    /* max-width: 1000px; */
  }
  .no__members {
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
  @media (max-width: 1100px) {
    .ig-new {
      width: 30%;
      height: min-content;
       img {
        object-fit: fill  !important;
       }
    }
  }
  @media (max-width: 600px) {
    .ig-new {
      width: 48%;
      height: min-content;
       img {
        object-fit: fill  !important;
       }
    }
  }
  /* @media (max-width: 400px) {
    .ig-new {
      width: 30%;
      height: min-content;
       img {
        object-fit: fill  !important;
       }
    }
  } */

`;
