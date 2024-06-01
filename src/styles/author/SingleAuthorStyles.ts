import styled from 'styled-components';

export const SingleAuthorStyles = styled.div`
  .author-header {
    
  padding-inline: 20%;
    background-color: var(--text-primary);
    /* text-align: center; */
    width: 100%;
    display: flex;
    gap: 2rem;
    .profileImage {
      height: 150px;
      width: 150px;
      /* margin: 0 auto; */
      border-radius: 50%;
      margin-bottom: 2rem;
    }
    .data{
      display: flex;
      flex-direction: column;
    }
    .name {
      color: var(--white);
      margin-bottom: 1rem;
      font-size: 32px;
    }
    .bio {
      color: var(--white);
      max-width: 500px;
    }
    .hr {
      margin: 3rem 0;
      color: var(--gray);
    }
  }
  .title, .poems__title {
    color: var(--text-1);
  }
  .poems__title {
    margin-top: 32px;
    text-align: left;
  }
  .container {
    max-width: none;
  padding-inline: 20%;
  }
  .author__socialList {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
      a {
        padding: 10px;
        border-radius: 100%;
        background-color: var(--text-1);
        display: inline-block;
        width: 40px;
        height: 40px;
        color: var(--primary-light-blue);
        transition: color .3s;
      }
        a:hover {
          color: var(--light-gray);
        }
      }
    .no__post {
      text-align: center;
      opacity: .6;
    }
`;
