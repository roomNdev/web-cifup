import { Link } from 'gatsby';
import styled from 'styled-components';

export const ExMemberItemStyles = styled.div`
  background-color: var(--text-primary);
  /* border-radius: 8px; */
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 260px;
  min-width: 260px;
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
    z-index: 1000000000;
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
    /* gap: 8px; */
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
        width: 80px;
        aspect-ratio: 1;
        border-radius: 50%;
      }
      .title {
        font-size: 18px;
      }
  .role {
    font-size: 12px;
  }
  }
`;
