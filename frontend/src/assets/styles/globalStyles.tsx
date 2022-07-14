import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
html {
  min-height: 100vh;
  background: ${({theme}) => theme.background};
  color: ${({theme}) => theme.text}
}

a,
a:hover,
a:visited {
  color: unset;
  text-decoration: none;
}
`;
 
export default GlobalStyle;