import styled from 'styled-components';

export const StudyCaseSectionStyles = styled.div`
    padding: 4rem;    
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    h1 {
        font-size: 4rem;
        color: var(--text-primary);
    }
    h2 {
        font-size: 3rem;
        color: var(--text-primary);
        font-weight: 600;
        margin-block: 1rem;
    }
    p {
        font-size: 2rem;
        color: var(--text-primary);
    }
    @media (max-width: 500px) {
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 1.5rem;
        }
    }
`