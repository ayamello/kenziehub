import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;

    .Cover {
        display: none;
    }
    
    .Main {
        flex: 2;
        background-color: var(--bluelight);
        text-align: center;

        img {
            width: 110px;
            margin: 7vh 0 4vh 0;
        }

        span, button, a {
            display: block;
        }

        span {
            display: block;
            color: var(--blue);
            font-weight: 600;
            font-size: 1.3rem;
            margin-bottom: 7vh;
        }

        button{
            width: 270px;
            height: 50px;
            margin: 0 auto;
            border: none;
            border-radius: 15px;
            font-size: 20px;
            color: var(--white);
            background-color: var(--blue);
        }

        button + button {
            color: var(--blue);
            background-color: transparent;
            border: 2px solid var(--blue);
            margin-top: 3vh;
        }

        a {
            width: 90%;
            max-width: 270px;
            margin: 3vh auto;
            font-size: 18px;
            color: var(--blue);
            text-decoration: none;
            text-align: right;

            svg {
                transform: translateY(5px);
            }
        }
    }

    @media (min-width: 1024px) {
        .Cover {
            display: block;
            flex: 1.5;
            text-align: center;

            .Illustrations {
                img {
                    position: absolute;
                    width: 34vw;
                    top: 25vh;
                    left: 2vw;
                }
                img + img {
                    width: 33vw;
                    top: 45vh;
                    left: 14vw;
                }
            }
        }

        .Main {
            display: flex;
            flex-direction: column;
            justify-content: center;

            img {
                display: none;
            }

            span {
                width: 80%;
                margin: 0 auto;
                margin-bottom: 7vh;
                font-size: 30px;
            }

            a {
                font-size: 20px;
            }
        }
    }

    @media (min-width: 1200px) {
        .Cover {
            h1 {
                font-size: 55px;
            }

            .Illustrations {
                img {
                    width: 28vw;
                    top: 22vh;
                    left: 2vw;
                }
                img + img {
                    width: 30vw;
                    top: 40vh;
                    left: 16vw;
                }
            }
        }   
    }
`;