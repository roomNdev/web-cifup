import styled from 'styled-components';

export const AboutSectionStyles = styled.div`
    display: flex;
    width: 100%;    
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: column;
    margin-top: 6rem;
    gap: 18rem;
    padding-inline: 4rem;
    .first_row {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-inline: auto;
        gap: 4rem;
        width: 100%;
        .about_text {
            display: flex;
            width: 70%;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            gap: 1rem;
            font-size: 1.5rem;
            color: var(--text-primary);
        }
        .about_image {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                border-radius: 100%;
                width: 250px;
                height: 250px;
            }
        }
    }
    .second_row {
        display: flex;
        gap: 20%;
        .numbers_container {
        display: flex;
        flex-wrap: wrap;
        gap: 4rem;
        width: 40%;
        .numbers_text {
            h2 {
                font-size: 4rem;
                text-align: center;
                color: var(--text-primary);
                margin-bottom: 1.5rem;
            }
            p {
                font-size: 1.5rem;
                text-align: center;
                color: var(--text-primary);
            }
        }
        .numbers {
            display: flex;
            align-items: center;
            justify-content: start;
            flex-wrap: wrap;
            row-gap: 2rem;
            article {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 140px;
                margin-inline: auto;
                span.number {
                    font-size: 4rem;
                    text-align: center;
                    color: var(--text-primary);
                }
                span.label {
                    text-align: center;
                    font-size: 2rem;
                    color: var(--text-primary);
                }
            }
        }
    }
        .cards_container {
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            flex-direction: column;
            flex-wrap: wrap;
            height: 400px;
            .card {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 180px;
                /* border: 1px solid #bbb; */
                border-radius: 1.5rem;
                padding: 1rem;
                box-shadow: -1px -1px 20px -2px rgba(0,0,0,0.4);
                -webkit-box-shadow: -1px -1px 20px -2px rgba(0,0,0,0.4);
                -moz-box-shadow: -1px -1px 20px -2px rgba(0,0,0,0.4);

                color: var(--text-primary);
                .card_icon {
                    width: 4rem;
                    height: 4rem;
                }
                h2 {
                    font-size: 2rem;
                    text-align: center;
                }
                p {
                    font-size: 1rem;
                    text-align: center;
                }
            }
        }
    }
    @media (max-width: 400px) {
        width: 100%;
        gap: 8rem;
        .first_row {
            flex-direction: column;
            .about_image {
                width: 100%;
                img {
                    width: 100%;
                }
            }
        }
        .second_row {
            flex-direction: column;
            align-items: center;
            .numbers_container {
                width: auto;
            }
            .cards_container {
                width: 80%;
            }
        }
    }
`