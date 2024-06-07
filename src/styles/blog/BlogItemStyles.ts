import styled from 'styled-components';

export const BlogItemStyles = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: relative;
  /* max-width: 330px; */
  flex-grow: .34;
  width: 30%;
  background-color: var(--text-primary);
  .img {
    max-width: 100%;
    width: 100%;
    min-width: 100%;
    max-height: 250px;
    border-radius: 10px 10px 0 0;
    margin-bottom: 1.5rem;
    [data-main-image] {
      transition: 0.3s ease-in-out transform;
    }
    img {
      width: 100%;
    }
  }
  .author {
    display: flex;
    width: 100%;
    align-items: center;
    /* justify-content: center; */
    padding-inline: 10px;
    gap: 4px;
    .author__img {
    aspect-ratio: 1;
    width: 25px;
    height: auto;
    /* left: 16px; */
    border-radius: 100%;
    z-index: 1;
    img {
      object-position: 50% 50%;
    }
  }
  .author-text {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 80%;
    p {
      display: inline;
      width: fit-content;
    }
    .author__name {
      /* background-color: var(--text-1); */
      color: var(--white-1);
      /* width: 70%; */
      /* z-index: ; */
      /* right: 0; */
      
      font-size: 1.5rem;
    }
  }
  }
  
  .title {
    color: var(--white-1)!important;
    /* padding-top: 25px; */
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-align: left;
  }
  .excerpt {
    font-size: 12px;
    margin-inline: 16px;
    text-wrap: pretty;
    color: var(--white-1);
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
  }
  .button__wrapper {
    width: 100%;
    margin-block: 16px;
  }
  .button__more {
    background-color: var(--text-1);
    font-size: 12px;
    padding: 0;
    padding-block: 8px;
    padding-inline: 24px;
    border-radius: 0 10px 10px 0;
    margin: 0;
  }
  .publishedAt {
    border-top: 1px solid var(--text-1);
    /* padding-block: 12px; */
    /* margin-bottom: 12px; */
  font-size: 9px;
    color: var(--white-1);
  }
  &:hover {
    .img [data-main-image] {
      transform: scale(1.05);
    }
  }
  .categoriesText {
    a {
      color: var(--white-1);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    min-width: 135px;
    
    flex-grow: 1;
    .title {
      margin-bottom: 0.5rem;
      margin-inline: 8px;
      font-size: 16px;
    }
    .excerpt {
      display: none;
    }
    .img{
      /* width: 100%; */
      height: auto;
      img {
        height: 210px;
        width: 100%;
      }
    }
    .author__img{
      top: 0px;
      width: 40px;
      height: 40px;
    }
    .author__name{
      display: none;
    }
    .publishedAt {
      font-size: 8px;
    }
  }
  /* @media only screen and (max-width: 360px) {
    .author__img{
      left: 0;
      top: 195px;
    }
    .author__name{
      display: none;
    }
    .title {
      font-size: 1.5rem;
      text-align: center;
    }
  } */
`;
