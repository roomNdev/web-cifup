import { Link } from 'gatsby';
import styled from 'styled-components';

export const DirectiveItemStyles = styled.div`
  background-color: var(--text-primary);
  /* border-radius: 8px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 300px; */
  /* min-width: 300px; */
  border-radius: 6px;
  /* flex-grow: .2; */
  flex-basis: 24%;
  /* flex: 1; */
  .link {
    width: 100%;
  }
  .image__wrapper {
    display: flex;
  border-radius: 6px;
    width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: center;
  }
  .profileImage {
    border-radius: 6px;
    border-bottom-right-radius:0px;
    border-bottom-left-radius: 0px;
    height: 250px;
    width: 100%;
    }
    .data {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-top: 20px;
      padding-inline: 16px;
      padding-bottom: 16px;
      position: relative;
      height: 280px;
      }
      .title {
        color: var(--text-white);
        font-size: 24px;
        font-weight: 500;
  }
  .actual-job{ 
    color: var(--jet-stream);
    font-size: 16px;
    text-align: center;
    flex-grow: 1;
  }
  .role {
    font-size: 22px;
    /* padding-inline: 8px; */
    /* background-color: var(--jet-stream); */
    
    flex-grow: 1;
    z-index: 10;
    margin-bottom: 16px;
    font-weight: 400;
    color: var(--jet-stream);
  }
  .date {
    color: #e9e9e9e9;
    font-size: 15px;
    font-weight: 300;
    /* display: flex; */
  }
  .author_socialList {
    margin-top: 1.5rem;
    display: flex;
    border-top: 1px solid #fff;
    flex-direction: row;
    width: 100%;
    justify-content: start;
    align-items: center;
    gap: 8px;
    a {
        width: 40px;
        margin-block: 8px;
        border: 1px solid #fff;
        border-radius: 100%;
        padding: 8px;

        aspect-ratio: 1;
        display: flex;
        transition: color .3s;
      }
        a:hover {
          color: var(--light-gray);
        }
      }
      @media (max-width: 1000px) {
        flex-basis: 30% !important;
        width: 30%;
        .data {
          .title {
            font-size: 18px;
          }
          .role {
            font-size: 16px;
          }
        }
      }
      @media only screen and (max-width: 768px) {
    
    /* max-width: 150px; */
    min-width: 150px;
    
    .profileImage {
      width: 100%;
      height: 150px;
      aspect-ratio: 1;
    }
    .title {
      font-size: 18px;
    }
.role {
  font-size: 12px;
}
.date {
  font-size: 12px;
}
}
      @media only screen and (max-width: 350px) {
    
    max-width: 120px;
    min-width: 120px;
    
    .profileImage {
      width: 100%;
      height: 120px;
      aspect-ratio: 1;
    }
    .author_socialList{
      a {
        width: 25px;
        padding: 4px;
      }
    }
  } 
`;
