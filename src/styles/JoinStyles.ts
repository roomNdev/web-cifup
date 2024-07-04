import styled from 'styled-components';

export default styled.div`
display: flex;
flex-direction: column;
width: 80%;
margin-inline: auto;
margin-block: 4rem;
.loading.form {
  display: none;
}
.loaded.form {
  display: block;
}
p.loading {
  font-size: 20px;
  color: var(--cobalt-blue);
  text-align: center;
}
p.loaded {
  display: none;
}

  h1 {
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    color: var(--text-1);
    margin-top: 60px;
  }
  .unirme_como {
    
    /* margin-left: 15%; */
    h2  {
      text-align: left;
      font-size: 20px;
      font-weight: 400;
      color: var(--text-1);
      /* margin-top: 60px; */
      margin-block: 30px;
    }
    button {
      padding: 2rem !important;
      font-size: 12px;
    }
  }
  .description {
    margin-bottom: 8rem;
    display: flex;
    flex-direction: column;
    justify-items: start;
    align-items: start;
  h1 {
    text-align: left;
    font-size: 40px;
    font-weight: 400;
    color: var(--text-1);
    margin-top: 60px;
  }
  .color-cobalt {
    color: var(--cobalt-blue)
  }
    p {
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    color: var(--text-primary);
    }
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
  @media (max-width: 700px) {
    .unirme_como {
    
    margin-left: 0;
    h2  {
    }
  }
  }

`;
