import styled from 'styled-components';

export const StudyCaseSectionStyles = styled.div`
    /* padding: 4rem;     */
    position: relative;
    width: 100%;
    height: 100%;
        margin-block: 4rem;
    background-color: var(--text-primary);
    .bg-image {
        z-index: 0;
        opacity: .6;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .content {
        padding-block: 16rem;
        position: relative;
        z-index: 1;
        margin-inline: auto;
        max-width: 1200px;
        display: flex;
        gap: 8rem;
        align-items: center; 
        justify-content: center;
        padding: 4rem;
        .main {
            width: 60%;
            display: flex;
            max-width: 700px;
            flex-direction: column;
            h1 {
                margin-block: 4rem;
                font-size: 46px;
                font-weight: 600;
                color: var(--white);
            }
            h2 {
                font-size: 25px;
                color: var(--white);
                font-weight: 500;
                margin-block: 1rem;
            }
            p {
                font-size: 17px;
                font-weight: 400;
                color: var(--white);
            }
        }
    }
    .video {
        width: 40%;
    }
    @media (max-width: 700px) {
        .content {
            flex-direction: column;
            .main {
                width: 100%;
                h1 {
                    font-size: 3rem;
                }
                h2 {
                    font-size: 2.25rem;
                }
                
                p {
                    font-size: 1.5rem;
                }
            }
            .video {
                width: 100%;
            }
        }
    }
`