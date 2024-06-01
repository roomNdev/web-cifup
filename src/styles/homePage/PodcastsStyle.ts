import styled from 'styled-components';

export const PodcastsStyles = styled.div`
    /* .episodes {
      display: flex;
      flex-direction: column;
    }

    .episode {
      min-width: max-content;
      margin-bottom: .8rem;
      padding: .8rem 1rem;
      border-radius: 10px;
      border: 0;
      background: #191414;
      color: #fff;
      cursor: pointer;
    }

    .episode:hover {
      background: #1Db954;
    }

    @media screen and (min-width: 860px) {
      body {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }
    } */

    /* padding-inline: 4rem; */
    margin-block: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 1200px;
    margin-inline: auto;
    h1 {
        color: var(--text-primary);
        font-size: 3.5rem;
        text-align: left;
        margin-block: 4rem;
    }
    .editable_item {
      width: 100%;
      height: 352px;
      background-color: var(--cobalt-blue);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4rem;
      gap: 2rem;
      .image {
        min-width: 272px;
        width: 272px;
        height: 272px;
        border-radius: 12px;
      }
      .data { 
        width: 100%;
        .title { 
          font-size: 2.3rem;
        }
        .description {
          font-size: 1.5rem;
        }
      }
    }
`;
