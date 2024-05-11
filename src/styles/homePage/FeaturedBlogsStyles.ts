import styled from 'styled-components';

export const FeaturedBlogsStyles = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 2rem auto;
    flex-direction: column;
    justify-content: center;
    /* margin-inline: 4rem; */
    h1 {
        font-size: 3.5rem;
        color: var(--text-primary);
        text-align: center;
        margin-bottom: 4rem;
    }
    .post_container {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow-x: auto;
        .post:first-child {
            background-color: var(--cobalt-blue);
        }
        .post {
            background-color: var(--text-primary);
            width: 300px;
            height: 350px;
            border-radius: 4px;
            p {
                padding-inline: 2rem;
                font-size: 13px;
            }
        }
        .post_image {
            width: 100%;
            height: 140px;
            border-radius: 4px 4px 0 0;
            user-select: none;
        }
        .post_title {
            font-size: 1.8rem;
            padding: 2rem;
        }
    }
    @media (max-width: 1300px) {
        .post_container {
            .post {
                width: 250px;
                height: 350px;
            }
        }
    }
    @media (max-width: 1060px) {
        .post_container {
            .post {
                width: 200px;
                height: 350px;
            }
        }
    }
    @media (max-width: 880px) {
        .post_container {
            flex-direction: column; 
            overflow: hidden;   
            .post {
                display: flex;
                width: 80%;
                height: 180px;
                padding-inline: 20px;
                padding-block: auto;
                flex-direction: row;
            }
            .post_image {
                width: auto;
                max-width: 250px;
                border-radius: 4px;
                height: 100%;
            }
        }
    }
`;  
