import styled from 'styled-components';

export const FeaturedBlogsStyles = styled.div`
    display: flex;
    margin-block: 2rem ;
    flex-direction: column;
    /* margin-inline: 4rem; */
    .mas {
        margin-inline: auto;
        margin-block: 2rem;
        max-width: 200px;
    }
    h1 {
        max-width: 1300px;
        margin-inline: auto;
        width: 100%;
        text-align: left;
        font-size: 3.5rem;
        color: var(--text-primary);
        text-align: left;
        margin-bottom: 4rem;
        
        padding-inline: 4rem;
    }
    .post_container {
        display: flex;
        max-width: 1400px;
        margin-inline: auto;
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
            width: 380px;
            height: 480px;
            border-radius: 4px;
            p {
                padding-inline: 2rem;
                font-size: 13px;
            }
        }
        .post_abstract {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .post_image {
            width: 100%;
            height: 220px;
            border-radius: 4px 4px 0 0;
            user-select: none;
        }
        .post_title {
            font-size: 2rem;
            line-height: 150%;
            padding: 2rem;
            padding-bottom: 0;
        }
    }
    @media (max-width: 1300px) {
        .post_container {
            .post {
                width: 250px;
                height: 400px;
            }
        }
    }
    @media (max-width: 1060px) {
        .post_container {
            .post {
                width: 200px;
                height: 400px;
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
                padding-right: 20px;
                padding-block: auto;
                flex-direction: row;
            }
            .post_image {
                max-width: 40%;
                width: auto;
                /* width: 100%; */
                min-width: 40%;
                border-radius: 4px;
                height: 100%;
            }
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
    @media (max-width: 360px) {
        h2.post_title {
            font-size: 1.8rem !important;
        }
    }
`;  
