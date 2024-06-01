import styled from 'styled-components';

export const InstagramSectionStyles = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
        overflow: hidden;
        h1 {
        padding-inline: 4rem;
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
    .container {
        margin-top: 20px;
        width: 100%;
        /* height: 700px; */
        aspect-ratio: 6/2;
        max-width: none;
            iframe {
                height: 100%;
            }
            /* flex-wrap: wrap;
            text-align: center;
            gap: 24px;
            position: relative; */
    }
    /* @media (max-width: 1450px) {
        .container {
            height: 650px !important;
        }
    }
    @media (max-width: 1250px) {
        .container {
            height: 600px !important;
        }
    }
    @media (max-width: 1100px ) {
        .container {
            height: 550px !important;
        }
    }
    @media (max-width: 900px ) {
        .container {
            height: 500px !important;
        }
    }
    @media (max-width: 800px ) {
        .container {
            height: 450px !important;
        }
    }
    @media (max-width: 700px ) {
        .container {
            height: 400px !important;
        }
    }
    
    @media (max-width: 600px ) {
        .container {
            height: 350px !important;
        }
    }
    
    @media (max-width: 445px ) {
        .container {
            height: 300px !important;
        }
    } */
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