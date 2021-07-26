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
        --bluelight: #E0E1E4;
    }

    body {
        font-family: 'Alegreya Sans';
        background-color: var(--whitesmoke);
    }

    h1 {
        color: var(--blue);
        font-family: 'Alegreya Sans SC';
        margin-top: 10vh;
        font-size: 50px;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;