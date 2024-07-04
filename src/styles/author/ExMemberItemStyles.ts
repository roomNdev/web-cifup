import { Link } from 'gatsby';
import styled from 'styled-components';

export const ExMemberItemStyles = styled.div`
  background-color: var(--text-primary);
  /* border-radius: 8px; */
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  max-width: 600px;
  width: 32%;
  border-radius: 6px;
  .data {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-inline: 8px;
    /* justify-content: space-between; */
    position: relative;
  }
  .exrole {
    color: var(--white);
    font-size: 18px;
    text-align: center;
    margin-top: 4px;
    &.directive {
      
    color: var(--jet-stream);
    }
  }
  .title {
    color: var(--text-white);
    font-size: 24px;
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
    gap: 8px;
      a {
        width: 40px;
        height: 40px;
        aspect-ratio: 1;
        border: 1px solid #fff;
        border-radius: 100px;
        padding: 10px;
        display: inline-block;
        transition: color .3s;
      }
        a:hover {
          color: var(--light-gray);
        }
      }
      @media only screen and (max-width: 768px) {
        flex-grow: 1;
        width: 250px;
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
