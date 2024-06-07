import styled from 'styled-components';

export const SliderStyles = styled.div`
margin-block: 4rem;

h1 {        padding-inline: 4rem;    

        max-width: 1300px;
        margin-inline: auto;
        font-size: 3rem;
        width: 100%;
        color: var(--text-primary);
        font-weight: 600;
        margin-block: 1rem;
    }
.carousel {
    .nuka-wrapper {
        gap: 1rem;
    }
    .nuka-nav-button {
        z-index: 10;
    }
}
    .image-container {
        max-width: 800px;
        min-width: 800px;
        /* min-height: auto; */
        min-height: 600px;
        max-height: 600px;
        position: relative;
        .image-text {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--text-primary);
            position: absolute;
            font-size: 24px;
            flex-direction: column;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            box-sizing: border-box;
            z-index: 1;
            opacity: 0;
            transition: opacity .4s;
            /* cursor: pointer; */
            background-color: var(--jet-stream);}
        &:hover {
            .image-text {
                opacity: .40;
            }
            
        }
        img {
            
        max-width: 800px;
        min-width: 800px;
        /* min-height: auto; */
        min-height: 600px;
        max-height: 600px;
        }
    }
    @media (max-width: 800px) {
        .image-container {
            aspect-ratio: 2/1;
            max-width: 90%;
            min-width: 90%;
            /* min-height: auto; */
            min-height: auto;
            max-height: auto;
            .image-text {
                font-size: 16px;
            }
            img {

                aspect-ratio: 2/1;
                max-width: 100%;
            min-width: 100%;
            /* min-height: auto; */
            min-height: auto;
            max-height: auto;
            }
        }
    }
    
    @media (max-width: 500px) {
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1.5rem;
        }
    }
`