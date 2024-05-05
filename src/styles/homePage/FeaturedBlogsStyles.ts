import styled from 'styled-components';

export const FeaturedBlogsStyles = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
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
        gap: 2rem;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow-x: auto;
        .post {
            background-color: var(--text-primary);
            width: 200px;
            height: 350px;
            border-radius: 12px;
        }
        .post_image {
            width: 200px;
            height: 140px;
            border-radius: 12px 12px 0 0;
            user-select: none;
        }
        .post_title {
            font-size: 1.8rem;
            padding: 2rem;
        }
    }
`;
