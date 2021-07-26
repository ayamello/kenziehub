import styled from 'styled-components';

export const Container = styled.div`
    label {
        display: none;
    }
    
    input {
        display: block;
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
`;