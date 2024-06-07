import styled from 'styled-components';

export const BlogStyles = styled.div`
    max-width: 1300px;
    width: 100%;
    margin-inline: auto;
    .desc {
        padding: 4rem;

        p{
            color: var(--text-primary);
            font-size: 2rem;
    max-width: 1300px;
    width: 100%;
        }
    h1 {
    max-width: 1300px;
    width: 100%;
    margin-inline: auto;
        font-size: 4rem;
        color: var(--text-primary);
    }
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