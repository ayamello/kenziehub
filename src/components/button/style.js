import styled from 'styled-components';

export const Container = styled.button`
    width: 270px;
    height: 50px;
    margin: 0 auto;
    border: ${(props) => props.whiteSchema ? "2px solid #001429" : "none"};
    border-radius: 15px;
    font-size: 20px;
    color: ${(props) => props.whiteSchema ? "#001429" : "#FFF"};
    background-color: ${(props) => props.whiteSchema ? "transparent" : "#001429"};
`;