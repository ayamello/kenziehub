import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--bluelight);
    min-height: 100vh;
    padding-bottom: 20px;

    .ModalAdd {
        width: 100vw;
        height: 100vh;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,.5);
        z-index: 1;

        .ModalContent {
            width: 80%;
            max-width: 290px;
            height: 45vh;
            border: 1px solid var(--blue);
            background-color: var(--whitesmoke);
        }

        .BtnClose {
            text-align: right;

            button {
            border: none;
            background-color: transparent;

                svg {
                    font-size: 30px;
                    padding: 5px;
                }
            }
        }
        
        form {
            padding: 2vh 0 5vh;
            text-align: center;

            label {
                display: none;
            }

            span {
                color: var(--blue);
                font-weight: bold;
                font-size: 25px;
            }

            input, select, button {
                display: block;
                width: 80%;
                height: 30px;
                margin: 3vh auto;
                padding: 0 7px;
            }

            button {
                color: var(--white);
                background-color: var(--orange);
                font-weight: medium;
                border: none;
            }
        }
    }

    header {
        padding: 1.5vh 3vw;
        text-align: right;

        h1 {
            display: none;
        }

        button {
            background-color: transparent;
            border: 1px solid var(--blue);

            svg {
                font-size: 35px;
                color: var(--blue);
                padding: 5px;
                transform: translateY(2px);
            }
        }   
    }

    @media (min-width: 768px) {
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h1 {
                display: block;
                margin: 0;
                font-size: 20px;
            }
        }
    }
`;

export const Content = styled.div`
    .HeaderProfile {
        color: var(--blue);
        text-align: center;
        margin-bottom: 7vh;

        h3 {
            font-size: 25px;
        }
        span {
            font-size: 20px;
        }
    }

    .Techs {
        width: 80%;
        max-width: 800px;
        margin: 0 auto;

        .HeaderTechs {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0,20,41,.2);

            h4 {
                font-size: 20px;
            }

            button {
                background-color: transparent;
                border: none;
                color: var(--orange);
                font-weight: bold;
            }
        }
    }

    @media (min-width: 768px) {
        .HeaderProfile {
            h3 {
                font-size: 30px;
            }
            span {
                font-size: 20px;
            }
        }

        .Techs {
            .HeaderTechs {
                h4 {
                    font-size: 25px;
                }

                button {
                    font-size: 20px;
                }
            }

            .ListTechs {
                display: flex;
                flex-wrap: wrap;
            }
        }
    }
`;