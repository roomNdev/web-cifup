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

    padding-inline: 4rem;
    margin-block: 4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    h1 {
        color: var(--text-primary);
        font-size: 3.5rem;
        text-align: center;
        margin-block: 4rem;
    }
`;
