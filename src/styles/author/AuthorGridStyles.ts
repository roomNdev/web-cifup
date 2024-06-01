import styled from 'styled-components';

export const AuthorGridStyles = styled.div`
  /* display: grid;
  display: grid;
  
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 280px); */
        width: 100%;
  .area-container {
    width: 100%;
    display: flex; 
    gap: 2rem;
    margin-block: 2rem;
    align-items: center;
    .area{
      text-align: left;
    }
    .area-desc{ 
      color: var(--text-primary);
      font-size: 16px;
      max-width: 40ch;
    }
  }
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  /* gap: 30px; */
  /* margin-inline: 8%; */
  align-items: center;
  .items {
    /* margin-inline: auto; */
    gap: 6px;
    margin-bottom: 4rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .no__members {
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .items {
      
      justify-content: center;
    }
    gap: 2rem;

  }
  
`;
