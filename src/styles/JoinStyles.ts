import styled from 'styled-components';

export default styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-block: 4rem;
  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    color: var(--text-1);
    margin-top: 60px;
  }
  h2  {
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    color: var(--text-1);
    margin-top: 60px;
  }
  .button-container {
    display: flex;
    gap: 2rem;
    button {
      cursor: pointer;
      padding: 12px;
      background-color: var(--text-primary);
      color: var(--white);
      border: none;
      border-radius: 8px;
  
    }
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin-inline: auto;
    gap: 4rem;
    div {
      display: flex;
      flex-direction: column;
    }
    label {
      color: var(--text-primary);
      font-size: 16px;
    }
    input {
      width: 320px;
      border: 1px solid #ccc;
      padding: 8px;
    }
    select {
      width: 320px;
      border: 1px solid #ccc;
      padding: 8px;
    }
    textarea {
      border: 1px solid #ccc;
      padding: 8px;
    }
  }

`;
