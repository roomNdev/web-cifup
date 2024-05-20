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
  .image__wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .profileImage {
    height: 250px;
  }
  .data {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
    padding-inline: 8px;
    height: 150px;
    position: relative;
  }
  .title {
    color: var(--text-white);
    font-size: 24px;
    text-align: center;
    margin-top: 4px;
  }
  .role {
    text-align: center;
    font-size: 20px;
    position: absolute;
    top: -100px;
    right: 0px;
    padding-inline: 8px;
    background-color: var(--jet-stream);
    z-index: 10;
    color: var(--text-white);
  }
  .date {
    color: var(--text-white);
    /* display: flex; */
  }
  .author_socialList {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: end;
    align-items: end;
    gap: 8px;
      a {
        padding: 10px;
        display: inline-block;
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
    .role {
      
    top: -60px;
    }
    .title {
      font-size: 18px;
    }
.role {
  font-size: 12px;
}
}
`;