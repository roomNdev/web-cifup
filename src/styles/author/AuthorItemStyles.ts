import { Link } from 'gatsby';
import styled from 'styled-components';

export const AuthorItemStyles = styled.div`
  background-color: var(--text-primary);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  /* align-items: ; */
  min-width: 300px;
  width: 33%;
  padding: 2rem;
  gap: 1rem;
  a {
    
    display: flex;
    width: 100%;
  }
  .profileImage {
    width: 120px;
    aspect-ratio: 1;
      border-radius: 8px;
  }
  .data {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-inline: 4px;
  }
  .title {
    color: var(--white);
    font-size: 18px;
    width: 100%;
    text-align: left;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .role {
    text-align: left;
    width: 100%;
    font-size: 14px;
    color: var(--jet-stream);
  }
  .author_socialList {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
      a {
        width: 20px;
        color: var(--primary-light-blue);
        transition: color .3s;
      }
        a:hover {
          color: var(--light-gray);
        }
      }
      @media only screen and (max-width: 768px) {
    
      /* max-width: 150px;
      min-width: 150px; */
  min-width: 260px;
      .title {
        font-size: 14px;
      }
      .role{ 
        font-size: 10px;
      }
      .profileImage {
        width: 100px;
        aspect-ratio: 1;
      }
      /* .title {
        font-size: 18px;
      }
  .role {
    font-size: 12px;
  } */
  }
  @media (max-width: 450px) {
        .profileImage {
          width: 80px;
        }
    }
    @media (max-width: 300px) {
        max-width: 240px;
        min-width: 240px;
        gap: 0;
    }
`;
