import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }


    body{
        background-color: ${(props) => props.theme["white"]};
        color: ${(props) => props.theme["black-500"]};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        outline: none;
;

    }
    body, input, textarea, button {
        font: 400 1rem Montserrat, sans-serif;
        }
`;
