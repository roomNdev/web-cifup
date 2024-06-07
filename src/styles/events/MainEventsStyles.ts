import styled from 'styled-components';

export const MainEventsStyles = styled.div`
    padding: 4rem;    
    
    max-width: 1300px;
    margin: 0 auto;
    h1 {
        font-size: 4rem;
        color: var(--text-primary);
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