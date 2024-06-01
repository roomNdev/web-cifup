import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 2rem 0 2rem 0;
  text-align: center;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--text-primary);
  .join-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .join {
    color: var(--bg-main);
    display: inline-block;
    text-decoration: none;
    font-size: 1.8rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    border: 2px solid #fff;
    &:hover {
        background-color: #fff;
        color: var(--text-primary);
    }
  }
  }
  .container {
    color: var(--text-1);
    display: flex;
    flex-direction: row;
    padding-top: 2rem;
    /* align-items: center; */
    justify-content: space-evenly;

    flex-wrap: wrap;
  }
  .col-1{
    width: 33%;
    h2 {
      color: var(--bg-main);
      font-size: 12px;
      margin-top: 3rem;
      margin-inline: 90px;
      font-weight: 400;
    }
    /* display: flex;
    flex-basis: 3/8; */
  }
   .col-2 {
    width: 33%
     /* width: 220px; */
    /* width: 300px; */
  }
  .col-3 {
    width: 33%;
    h2 {
      color: var(--bg-main);
      font-size: 2rem;
      margin-bottom: 3rem;
      text-align: center;
      padding-left: 2rem;
      font-weight: 400;
    }
    ul{
    /* flex-basis: 3/8; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    gap: 1rem;
    /* justify-content: center; */
  }
    li {
      min-width: 150px;
      /* height: 100px; */
      /* width: 80px; */
    }
  }
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 400px;
  }
  /* .footer__menuList {
    margin-block: 2rem;
    border-radius: 8px;
    display: flex;
    background-color: var(--text-1);
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: max-content;
      margin: 2rem auto;
      flex-wrap: wrap;
    li {
      margin: 0 1rem;
      a {
        padding: 4px;
        font-size: 1.6rem;
        transition: color .3s;
      }
      &:hover {
        a{
        color: var(--light-gray);
      }
      }
    }
  } */
  .footer__socialList {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li {
      display: flex;
      margin: 0 0.5rem;
      a {
        padding: 10px;
        border-radius: 100%;
        background-color: var(--text-1);
        display: inline-block;
        width: 50px;
        /* aspect-ratio: 1; */
        height: 50px;
        color: var(--white-1);
        transition: color .3s;
      }
      &:hover {
        a {
          color: var(--light-gray);
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    font-size: 1.2rem;
    color: var(--bg-main);
  }
  @media only screen and (max-width: 768px) {
    .col-1 {
      h2 {
        margin-inline: 0;
      }
    }
    .col-3 {
      min-width: 200px;
      h2 {
        padding: 0;
      }
    }
    .footer__menuList{
      display: none;
    }
    .footer__socialList{
      li{
      a{
        padding: 7px;
        width: 35px;
        height: 35px;
      }
    }
    }
    .copyright {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 600px) {
    .container {
      row-gap: 2rem;
    }
  }
`;
