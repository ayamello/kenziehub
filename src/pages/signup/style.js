import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;

    .Main {
        flex: 2;
        background-color: var(--bluelight);
        text-align: center;

        h3 {
            display: none;
        }

        img {
            width: 110px;
            margin: 7vh 0 4vh 0;
        }

        input, span, button {
            display: block;
        }

        label {
            display: none;
        }

        form span {
            width: 270px;
            margin: 0 auto -5px;
            padding-left: 7px;
            text-align: left;
            color: red;
            font-size: 12px;
        }

        input, select, textarea {
            width: 270px;
            height: 50px;
            margin: 2vh auto;
            padding-left: 12px;
            color: var(--blue);
            background-color: transparent;
            border: 2px solid var(--blue);
            border-radius: 15px;
            font-size: 16px;

            &::placeholder {
                color: rgba(0,20,41,.5);
            }
        }

        select {
            margin-top: -2vh;
        }

        textarea {
            padding-top: 12px;
        }

        button {
            width: 270px;
            height: 50px;
            margin: 5vh auto;
            border: none;
            border-radius: 15px;
            font-size: 20px;
            color: var(--white);
            background-color: var(--blue);
        }

        span {
            display: block;
            color: var(--blue);
            font-size: 1rem;
            margin-bottom: 7vh;

            a {
                font-size: 18px;
                color: var(--orange);
                padding: 4px;
            }
        }

        .BtnNext, .BtnBack {
            height: 25px;
            font-family: 'Alegreya Sans SC';
            font-size: 18px;
            padding-right: 8px;
            color: var(--blue);
            background-color: transparent;
        }

        .BtnNext {
            text-align: right;
        }

        .BtnBack {
            text-align: left;
            margin-top: 2vh;
        }

        svg {
            transform: translateY(5px);
        }
    }

    .Cover {
        display: none;
    }

    @media (min-width: 1024px) {
        .Main {
            h3 {
                display: block;
                font-size: 38px;
                margin: 15vh 0 12vh;
            }

            img {
                display: none;
            }
        }

        .Cover {
            display: block;
            flex: 1.5;
            text-align: center;

            .Illustrations {
                img {
                    position: absolute;
                    width: 20vw;
                    top: 25vh;
                    right: 2vw;
                }
                img + img {
                    width: 35vw;
                    top: 45vh;
                    right: 12vw;
                    transform: scaleX(-1);
                }
            }
        }
    }

    @media (min-width: 1200px) {
        .Cover {
            .Illustrations {
                img {
                    position: absolute;
                    width: 25vw;
                    top: 22vh;
                    right: 2vw;
                }
                img + img {
                    width: 28vw;
                    top: 30vh;
                    right: 18vw;
                }
            }
        }
    }
`;