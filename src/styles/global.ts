import { createGlobalStyle } from "styled-components";
import CovidImg from '../assets/images/covid.jpg';
export const GlobalStyle = createGlobalStyle`

#root{
    background: url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
}
* {

    outline: none;
    box-sizing: border-box;
 }
 
  body,html{
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
}

html{ 
    @media(max-width:1080px) {
        font-size: 93.75% //15
    }
    @media(max-width:720px) {
        font-size: 87.5% //14
    }
}
body, input, textarea, button, select{
    font-family:  sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6{
    font-weight: 600;
}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

.mb-2{
 margin-bottom: 1rem;
}
.pt-2{
  padding-top: 1rem;
}
`;
