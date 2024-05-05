import styled from 'styled-components';

export const AuthorGridStyles = styled.div`
  /* display: grid;
  
  display: grid;
  
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 280px); */
  display: flex;
  margin-top: 3.5rem;
  gap: 30px;
  justify-content: start;
  .items {
    margin-inline: auto;
    gap: 8px;
    width: 1200px;
    display: flex;
  }
  flex-wrap: wrap;
  .no__members {
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
`;
