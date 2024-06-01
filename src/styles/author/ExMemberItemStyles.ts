import { Link } from 'gatsby';
import styled from 'styled-components';

export const ExMemberItemStyles = styled.div`
  background-color: var(--text-primary);
  /* border-radius: 8px; */
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  max-width: 350px;
  min-width: 350px;
  border-radius: 6px;
  .data {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-inline: 8px;
    position: relative;
  }
  .exrole {
    color: var(--white);
    font-size: 12px;
    text-align: center;
    margin-top: 4px;
    &.directive {
      
    color: var(--jet-stream);
    }
  }
  .title {
    color: var(--text-white);
    font-size: 24px;
    text-align: center;
    margin-top: 4px;
  }
  .date {
    color: var(--text-white);
    /* display: flex; */
  }
  .author_socialList {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    /* width: 100%; */
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
