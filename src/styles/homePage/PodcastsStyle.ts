import styled from 'styled-components';

export const PodcastsStyles = styled.div`

    display: flex;
    flex-direction: column;
    padding: 4rem;
    max-width: 1300px;
    width: 100%;
    margin-inline: auto;
    .mas {
        margin-inline: auto;
        margin-block: 2rem;
        max-width: 200px;
    }
    .content {
      width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
      .episodes {
        display: flex;
        gap: 2rem;
        margin-block: 4rem;
        flex-basis: 33%;
        flex-wrap: wrap;
        div {
          flex-grow: .5;
        }
      }
    }
    h1 {max-width: 1300px;
        margin-inline: auto;
        width: 100%;
        color: var(--text-primary);
        font-size: 4rem;
        text-align: left;
    }
            p {
                font-size: 17px;
                font-weight: 400;
                color: var(--text-primary);
            }
    /* .editable_item {
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
      } */
        .title { 
          color: var(--cobalt-blue);
          font-size: 2.7rem;
        }
        .description {
          color: var(--text-primary);
          font-size: 2rem;
        }
      
    
    @media (max-width: 530px) {
        h1 {
            
            font-size: 2rem;
        }
        p {
            
            font-size: 1.6rem;
        }
    }
    
    @media (max-width: 680px) {
      .content {
        .episodes {
          div {
            width: 100%;
          }
        }
      }
    }
    @media (max-width: 509px) {
      .editable_item {
        flex-direction: column;
        height: auto;
        .data {
          .title {
            
          }
        }
        .image {
          aspect-ratio: 1;
        min-width: 137px;
    width: 137px;
    height: 137px;
        }
      }
    }
`;
