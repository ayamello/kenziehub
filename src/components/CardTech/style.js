import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--blue);
    width: 100%;
    max-width: 256px;
    padding: 0 10px;
    margin: 2vh auto;

    h5 {
        text-align: center;
        font-family: 'Alegreya Sans SC';
        font-size: 24px;
        color: var(--white);
        padding: 1vh 0;
    }

    p {
        color: var(--white);
        margin: 2vh 0;
        margin-bottom: 5vh;

        span {
            font-weight: bold;
            }
    }
`;

export const Btns = styled.div`
    padding-bottom: 4vh;
    margin: 0 10px;
    display: flex;
    justify-content: space-between;

    .BtnUpdate {
        color: var(--white);
        background-color: var(--orange);
        border: none;
        width: 100px;
        height: 30px;
        max-width: 170px;
    }

    .BtnDelete {
        width: 35px;
        height: 30px;
        color: var(--orange);
        border: 2px solid var(--orange);
        background-color: transparent;

        svg {
            transform: translateY(2px);
            }
    }       
`;