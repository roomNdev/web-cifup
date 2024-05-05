import styled from 'styled-components';

export default styled.div`
    .tooltip-active{
        opacity: 100;
        transform: translate3d(0, 40px, 0);
    }

    .tooltip-inactive{
        opacity: 0;
        transform: translate3d(0, 0, 0);
    }

    .tooltip{
        position: fixed;
        top: 10px;
        left: 44%;
        padding-inline: 48px;
        border-radius: 16px;
        font-size: 16px;
        text-align: center;
        z-index: 10000;
        background-color: var(--primary-light-blue);
        color: var(--gray);
        transition: transform .5s ease, opacity .8s;
    }
    .title {
        color: var(--text-1);
        font-size: 48px;
        margin-bottom: 30px;
        text-align: center;
    }
    .form {
        max-width: 900px;
        padding-inline: 2%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    input,textarea {
        padding-block: 10px;
        padding-left: 4%;
        font-size: 20px;
        border: 0;
        border-radius: 4px;
        background-color: var(--jet-stream);
    }
    input[type="submit"] {
        width: 100%;
        padding-inline: 0;

        cursor: pointer;
        background-color: var(--text-primary);
        text-align: center;
        color: var(--white);
    }
    textarea{
        height: 140px;
    }
    .label {
        color: var(--text-1);
        font-size: 18px;
    }
    .info {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 10px;
        input {
            width: 50%;
        }
    }
    .maps {
        margin-top: 10vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .mapouter {
        position: relative;
        text-align: right;
        width: 100%;
        height: 100%;
        max-width: 600px;
        max-height: 600px;
        aspect-ratio: 1;
        /* height: 100%; */
    }
    #gmap_canvas{
        max-width: 600px;
        max-height: 600px;
    }
    .gmap_canvas{
        overflow: hidden;
        background: none !important;
        width: 100%;
        height: 100%;
        /* aspect-ratio: 1; */
    }
    @media only screen and (max-width: 768px) {
        .title{
            font-size: 3rem;
        }
    }
`;
