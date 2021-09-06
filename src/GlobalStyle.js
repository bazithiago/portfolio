import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    font-family: 'Work sans', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    }

    :root {
    /* --primary: #50c751;
    --primary-hover: #5fe660;
    --grey-one: #0C0E25;
    --grey-two: #90939A;
    --grey-three: #BFC0C2;
    --grey-four: #ebebec;
    --white: #FFFFFF;
    --background: #F5F6FA;
    --red-alert: #E3324C;
    --yellow-attention: #FB9F36;
    --blue-one: #4978d3;
    --blue-two: #4b8ddd;
    --blue-three: #b6d3f6; */
    }


    html,
    body {
        background: #ffffff;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        display: flex;
       
        
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none; 
        scrollbar-width: none;  

    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
    }

`;
 
export default GlobalStyle;