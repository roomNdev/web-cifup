import styled from 'styled-components';

export const AuthorsStyles = styled.div`
        margin-inline: auto;
        max-width: 1300px;
        width: 100%;
        padding-inline: 4rem;
        margin-block: 6rem;
        .description {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            .description-image {
                border-radius: 6px;
                min-width: 100%;
            }
            p {
                color: var(--text-primary);
                font-size: 20px;
                margin-block: 4rem
            }
        }
    h1.title {
        color: var(--text-primary);
        font-size: 3.5rem;
        text-align: left;
        margin: 0;
        margin-top: 4rem;
    }
    p.desc {
        color: var(--text-primary);
        font-size: 16px;
        margin-bottom: 4rem;
        max-width: 64ch;
    }
    @media (max-width: 1200px) {
        .description {
            grid-template-columns: 1fr;
            gap: 0;
            .description-image {
                aspect-ratio: 2/1;
                max-width: 600px;
                grid-row: 2;
            }
        }
    } 
    @media (max-width: 400px) {
        .description {
            .description-image {
                aspect-ratio: 2/1.8;
            }
        }
        padding-inline: 2rem;
    }
  /* @media only screen and (max-width: 360px) {
    
  } */
`