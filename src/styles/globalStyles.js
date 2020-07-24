import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  bottom: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: 'Raleway', sans-serif;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none; 
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

.lines {
 border-right: 1px solid #ECEFF3;
}

.statement {
  font-size: 1.6rem;
  text-align: center;
  margin: 4rem;
  color: #000;
}
.active-route {
  border-bottom: 1px solid #0918FF;
}

`;

export default GlobalStyles;

