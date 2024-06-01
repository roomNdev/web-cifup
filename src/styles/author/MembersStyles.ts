import styled from 'styled-components';

export const MembersStyles = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-inline: 8%; */
    width: 100%;
    gap: 2rem;
    @keyframes details-show {
  from {
    opacity:0;
    transform: var(--details-translate, translateY(-0.5em));
  }
}

details[open] > summary > h2 .icon {
    rotate: 180deg;
}
details[open] > *:not(summary) {
  animation: details-show 150ms ease-in-out;
}

summary {
    display: flex;
    width: 220px;
    /* width: max-content; */
    h2 {
        
    border: var(--jet-stream) 1px solid;
    padding: 8px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 4px;
        .icon {
            transition: rotate .5s cubic-bezier(0.165, 0.84, 0.44, 1);
            width: 10px;
            height: 10px;
        }
    }
    /* width: 220px; */
}
    .img {
        width: 50%;
        margin-inline: auto;
    }
    .areas {
        display: flex;
    gap: 2rem;
        flex-direction: column;
        /* flex-wrap: wrap; */
        width: 100%;
        .area {
            margin-inline: auto;
            width: 100%;
            /* max-width: 580px; */
            color: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .members {
                width: 100%;
                margin-block: 2rem;
                display: flex;
                flex-direction: row;
                align-items: stretch;
                /* width: auto; */
                /* justify-content: center; */
                gap: 2px;
                flex-wrap: wrap;
            }
        }
    }
    @media (max-width: 1250px) {
        margin-inline: 10px;
     .area {
        width: 100%;
        .members {
            justify-content: center;
        }
     }   
    }
    @media (max-width: 1150px) {
        margin-inline: 10px;
        .areas {

            .area {
               width: 100%;
               .members {
                   justify-content: center;
               }
            }   
        }
    }
    @media (max-width: 630px) {
        margin-inline: 10px;
        .areas {

            .area {
               width: 100%;
               /* .members {
                   justify-content: center;
               } */
            }   
        }
    }
    @media (max-width: 400px) {
        margin-inline: 10px;
     .area {
        width: 100%;
        .members {
            justify-content: center;
        }
     }   
    }
`