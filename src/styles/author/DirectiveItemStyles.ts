import { Link } from 'gatsby';
import styled from 'styled-components';

export const DirectiveItemStyles = styled.div`
  background-color: var(--text-primary);
  /* border-radius: 8px; */
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 240px;
  min-width: 240px;
  border-radius: 6px;
  .image__wrapper {
    display: flex;
  border-radius: 6px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .profileImage {
  border-radius: 6px;

  border-bottom-right-radius:0px;
  border-bottom-left-radius: 0px;

    height: 250px;
  }
  .data {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
    padding-inline: 8px;
    position: relative;
  }
  .title {
    color: var(--text-white);
    font-size: 24px;
    text-align: center;
    margin-top: 4px;
  }
  .actual-job{ 
    color: var(--jet-stream);
    font-size: 16px;
    text-align: center;
  }
  .role {
    text-align: center;
    font-size: 16px;
    /* padding-inline: 8px; */
    /* background-color: var(--jet-stream); */
    z-index: 10;
    color: var(--jet-stream);
  }
  .date {
    color: var(--text-white);
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
        margin-block: 8px;
        border: 1px solid #fff;
        border-radius: 100%;
        padding: 10px;
        aspect-ratio: 1;
        display: flex;
        transition: color .3s;
      }
        a:hover {
          color: var(--light-gray);
        }
      }
      @media only screen and (max-width: 768px) {
    
    max-width: 150px;
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
}
`;
