import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --blue: #001429;
        --orange: #A23700;
        --white: #FFF;
        --whitesmoke: #F9F9F9;
        --bluelight: rgba(0,20,41,.5);
    }

    body {
        background-color: var(---whitesmoke);
    }

    h1 {
        color: var(--blue);
        font-family: 'Alegreya Sans SC';
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;