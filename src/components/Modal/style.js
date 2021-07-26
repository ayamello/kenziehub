import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.5);
    z-index: 1;
`;

export const Content = styled.div`
    width: 80%;
    max-width: 290px;
    border: 1px solid var(--blue);
    background-color: var(--whitesmoke);
`;