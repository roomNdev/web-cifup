import styled from 'styled-components';

export const InstagramSectionStyles = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
        overflow: hidden;
        h1 {
        padding-inline: 4rem;
        color: var(--text-primary);
        font-size: 3.5rem;
        margin-bottom: 4rem;
        text-align: left;
        max-width: 1300px;
        margin-inline: auto;
        width: 100%;
        text-align: left;
    }
    .container {
        margin-top: 20px;
        width: 100%;
        margin-inline: auto;
        max-width: 1300px !important;
        padding-left: 4rem;
        /* height: 700px; */
        aspect-ratio: 1.57/2;
        max-width: none;
            iframe {
                height: 100%;
            }
            /* flex-wrap: wrap;
            text-align: center;
            gap: 24px;
            position: relative; */
    }
    @media (max-width: 900px ) {
        .container {
            aspect-ratio: 1.5/2;
            /* height: 500px !important; */
        }
    }
    @media (max-width: 600px ) {
        .container {
            aspect-ratio: 1.3/2;
            /* height: 350px !important; */
        }
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
    
    
    /* .event_container {
        display: flex;
        gap: 2rem;
        overflow-x: auto;
        .
        } */
        @media (max-width: 440px ) {
            .container {
                aspect-ratio: 1.9/2;
            }
        } 
        @media (max-width: 360px ) {
            .container {
                /* aspect-ratio: 1.9/2; */

                padding-left: 2rem;
            }
        } 
    @media (max-width: 530px) {
        h1 {
            
            font-size: 2rem;
        }
        p {
            
            font-size: 1.6rem;
        }
    }
    @media (max-width: 500px) {
        .event_container {
            .event {
                p {
                    font-size: 1.2rem;
                }
            }
        }
    }
`