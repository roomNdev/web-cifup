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
    .container.home {
        margin-top: 20px;
        width: 100%;
        margin-inline: auto;
        max-width: 1300px !important;
        padding-left: 4rem;
        /* height: 700px; */
            aspect-ratio: 3.15/1;
        max-width: none;
            iframe {
                height: 100%;
            }
            /* flex-wrap: wrap;
            text-align: center;
            gap: 24px;
            position: relative; */
    }
    @media (max-width: 1300px ) {
        .container.home {
            height: calc(33vw);
            /* height: 500px !important; */
        }
        .container {
            padding-left: 1rem;
        }
    }
    @media (max-width: 800px ) {
        
        .container {
            padding-left: 1rem;
        }
    }
    @media (max-width: 600px ) {
        
        .container {
            padding-left: 1rem;
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
    
    @media (max-width: 470px ) {
        
        .container {
            padding-left: 1rem;
        }
    }
`