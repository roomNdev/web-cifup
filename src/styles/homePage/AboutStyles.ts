import styled from 'styled-components';

export const AboutSectionStyles = styled.div`
    display: flex;
    width: 100%;    
    max-width: 1300px;
    margin: 0 auto;
    flex-direction: column;
    margin-top: 6rem;
    gap: 10rem;
    padding-inline: 4rem;
    /* .first_row {
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
            width: 250px;
            height: 250px;
            img {
                border-radius: 100%;
            }
        }
    } */
    .first_row {
        display: flex;
        /* .numbers_container {
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
    } */
        .cards_container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* gap: aut; */
            flex-direction: row;
        gap: 1rem;
            /* flex-wrap: wrap; */
            /* height: 400px; */
            .card {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                /* width: 50%; */
                max-width: 280px;
                height: 220px;
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
                    font-size: 2.2rem;
                    text-align: center;
                }
                p {
                    font-size: 1.4rem;
                    text-align: center;
                }
            }
        }
    }
    .second_row {
        .description {
            margin-block: 4rem;
        }
        .main-title {
            color: var(--text-primary);
        font-size: 3.5rem;
        margin: 0;
        }
        .desc {
            width: 100%;
            max-width: 600px;
            margin: 5rem auto;
            p {
                color: var(--text-primary);
            font-size: 2rem;
            /* width: 100%; */
            }

        } 
        .cards_container {
            width: 100%;
                grid-column-gap: 44px;
                grid-row-gap: 44px;
                grid-template-rows: auto;
                grid-template-columns: 1fr 1fr 1fr;
                grid-auto-columns: 1fr;
                display: grid;

            .card {
                width: auto;
                max-height: 240px;
                position: relative;
                max-width: 100%;
                    border-radius: 12px;
                    p {
                        font-size: 1.6rem;
                    }
                    h2  {
                        font-size: 2.2rem;
                    }
                .card-image {
                    aspect-ratio: 1.46818;
                    max-height: 240px;
                    border-radius: 12px;
                width: 100%
                }
                .absolute-over-image {
                    border-radius: 12px;
                z-index: 3;
                background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(18, 37, 52, 0) 28%, #0b1b28);
                flex-direction: column;
                justify-content: flex-end;
                padding: 20px 20px 20px 25px;
                transition: all .5s;
                display: flex;
                position: absolute;
                width: 100%;
                top: 0%;
                bottom: 0%;
                left: 0%;
                right: 0%;
                .icon {
                    width: 8px;
                    height: 8px;
                }
                }
            }
        }
    }
    @media (max-width: 1200px) {
        .first_row {
            .cards_container {
                .card {
                    
                max-width: 220px;
                height: 200px;
                p {
                    font-size: 1.4rem;
                }
                h2  {
                    font-size: 1.8rem;
                }
                }

            }
        }
    }
    @media (max-width: 991px) {
        .second_row {
            .cards_container {
            grid-column-gap: 20px;
            grid-row-gap: 20px;
            grid-template-columns: 1fr 1fr;
        }
        .desc {
            
        p {
            font-size: 1.6rem;
        }
        }
        }
    }
    @media (max-width: 755px) {
        /* .first_row {
            .about_image {
                img {}
            }
        } */
        .first_row {
            .cards_container {
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-evenly;
            }
        }
    }
    @media (max-width: 600px) {
        width: 100%;        
        .first_row {
            /* flex-direction: column;
            align-items: center;
            .numbers_container {
                width: auto;
            } */
            .cards_container {
                .card {
                    min-width: 220px; 
                    p {
                        display: none;
                    }
                    /* width: 80%; */
                }
            }
        }

        /* gap: 8rem; */
        /* .first_row {
            flex-direction: column;
            .about_image {
                width: 100%;
                img {
                    width: 100%;
                }
            }
        } */
        .second_row {
            .cards_container {
                grid-template-columns: 1fr;
            }
        }
    }
    @media (max-width: 530px) {
        
        .first_row {
            /* flex-direction: column;
            align-items: center;
            .numbers_container {
                width: auto;
            } */
            .cards_container {
                .card {
                    min-width: 145px; 
                    max-width: 145px; 
                    p {
                        display: none;
                    }
                    /* width: 80%; */
                }
            }
        }
        .second_row {
            .main-title{
                font-size: 2rem;
            }
            p.desc {
                font-size: 1.6rem;
            }
        }
    }    
    @media (max-width: 380px) {
        
        .first_row {
            /* flex-direction: column;
            align-items: center;
            .numbers_container {
                width: auto;
            } */
            .cards_container {
                gap: 2rem;
                .card {
                    max-width: 110px; 
                    min-width: 110px; 
                    /* max-width: 100px;  */
                    height: 160px;
                    p {
                        display: none;
                    }
                    h2 {
                        font-size: 16px;
                    }
                    /* width: 80%; */
                }
            }
        }
        .second_row {
            .main-title {
                font-size: 2rem;
            }
        }
    }
    @media (max-width: 320px) {
        padding:0;
        .first_row {
            /* flex-direction: column;
            align-items: center;
            .numbers_container {
                width: auto;
            } */
            .cards_container {
                .card {
                    max-width: 100px; 
                    p {
                        display: none;
                    }
                    h2 {
                        font-size: 16px;
                    }
                    /* width: 80%; */
                }
            }
        }
        .second_row {
            padding-inline: 2rem;
        }
    }
`