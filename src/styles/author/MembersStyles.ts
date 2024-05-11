import styled from 'styled-components';

export const MembersStyles = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-inline: 8%; */
    width: 100%;
    .img {
        width: 50%;
        margin-inline: auto;
    }
    .areas {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        .area {
            margin-inline: auto;
            width: 50%;
            max-width: 580px;
            color: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .members {
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