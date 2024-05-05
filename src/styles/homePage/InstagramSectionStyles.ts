import styled from 'styled-components';

export const InstagramSectionStyles = styled.div`
    display: flex;
    flex-direction: column;
    margin-block: 6rem;
        overflow: hidden;
        padding-inline: 4rem;
    h1 {
        color: var(--text-primary);
        font-size: 3.5rem;
        margin-bottom: 4rem;
        text-align: center;
    }
    /* .event {
        max-width: 300px;
    } */
    .demo-slide {
        max-width: 300px;
        min-width: 300px;
        min-height: 100px;
        
    }
    .event {
            gap: 1rem;
            display: flex;
            flex-direction: column;
            /* width: 300px; */
            /* min-width: 300px; */
            background-color: var(--text-primary);
            padding-bottom: 2rem;
            img {
                object-fit: cover;
                height: 250px;
                transition: scale .6s;
            }
            &:hover {
                img {
                    scale: 1.05;
                }
            }
            h2, p {
                padding-inline: 2rem;
            }
        }
    /* .event_container {
        display: flex;
        gap: 2rem;
        overflow-x: auto;
        .
    } */
    @media (max-width: 500px) {
        h1 {
            font-size: 3rem;
        }
        .event_container {
            .event {
                p {
                    font-size: 1.2rem;
                }
            }
        }
    }
`