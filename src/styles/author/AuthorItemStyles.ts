import { Link } from 'gatsby';
import styled from 'styled-components';

export const AuthorItemStyles = styled.div`
  background-color: var(--text-primary);
  border-radius: 8px;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  /* align-items: ; */
  max-width: 260px;
  min-width: 260px;
  /* .icon {

  } */
  a {
    
    display: flex;
    width: 100%;
  }
  .profileImage {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
  }
  .data {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-inline: 16px;
  }
  .title {
    color: var(--white);
    font-size: 12px;
    width: 100%;
    text-align: left;
    margin-top: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .role {
    text-align: left;
    width: 100%;
    font-size: 10px;
    color: var(--text-white);
  }
  .author_socialList {
    display: flex;
    flex-direction: row;
    justify-content: start;
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
      
      .profileImage {
        width: 80px;
        aspect-ratio: 1;
        border-radius: 50%;
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
          width: 50px;
        }
    }
    @media (max-width: 300px) {
        max-width: 200px;
        min-width: 200px;
        gap: 0;
    }
`;
