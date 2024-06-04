import styled from 'styled-components';

export const AuthorsStyles = styled.div`
        margin-inline: 15%;
        margin-block: 6rem;
        .description {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            .description-image {
                border-radius: 6px;
            }
            p {
                color: var(--text-primary);
                font-size: 14px;
                margin-block: 4rem
            }
        }
    h1 {
        color: var(--text-primary);
        font-size: 3.5rem;
        text-align: left;
        margin-block: .5rem;
    }
    p.desc {
        color: var(--text-primary);
        font-size: 14px;
        margin-block: 4rem
    }
`