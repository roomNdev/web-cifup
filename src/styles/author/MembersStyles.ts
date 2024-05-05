import styled from 'styled-components';

export const MembersStyles = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: 120px;
    width: 100%;
    .img {
        width: 50%;
        margin-inline: auto;
    }
    .areas {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .area {
            width: 50%;
            color: #000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .members {
                display: flex;
                flex-direction: row;
                align-items: stretch;
                justify-content: center;
                gap: 2px;
                flex-wrap: wrap;
            }
        }
    }
`