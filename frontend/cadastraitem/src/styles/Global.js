import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, input, button{
        font-family: Roboto, sans-serif;
    }


    html, body, #root{
        height: 100%;
    }
    
`;