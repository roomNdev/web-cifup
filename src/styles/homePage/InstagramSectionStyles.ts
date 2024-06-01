import styled from 'styled-components';

export const InstagramSectionStyles = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
        overflow: hidden;
        padding-inline: 4rem;
    h1 {
        color: var(--text-primary);
        font-size: 3.5rem;
        margin-bottom: 4rem;
        text-align: left;
    }
    .demo-slide {
        max-width: 400px;
        min-width: 400px;
        /* min-height: auto; */
        min-height: 400px;
        max-height: 400px;
        
    }
    .event {
            gap: 1rem;
            display: flex;
            flex-direction: column;
            /* width: 300px; */
            /* min-width: 300px; */
            background-color: var(--text-primary);
            /* padding-bottom: 2rem; */
            overflow: hidden;
            img {
                object-fit: cover;
                height: auto;
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