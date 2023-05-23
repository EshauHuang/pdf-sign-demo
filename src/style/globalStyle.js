import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
html,
body {
  @font-face {
    font-family: 'Chenyuluoyan-Monospaced';
    src: url("/font/ChenYuluoyan-Thin-Monospaced.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Chenyuluoyan';
    src: url("/font/ChenYuluoyan-Thin.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("/font/NotoSerifTC-ExtraLight.otf") format("opentype");
    font-style: normal;
    font-weight: 200;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("/font/NotoSerifTC-Light.otf") format("opentype");
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("/font/NotoSerifTC-Regular.otf") format("opentype");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("/font/NotoSerifTC-Medium.otf") format("opentype");
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("/font/NotoSerifTC-SemiBold.otf") format("opentype");
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("/font/NotoSerifTC-Bold.otf") format("opentype");
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("/font/NotoSerifTC-Bold.otf") format("opentype");
    font-style: normal;
    font-weight: 900;
  }

  margin: 0;
  height: 100%;
  font-size: 62.5%;
  /* font-family: "Chenyuluoyan-Monospaced",  "Noto-Serif-TC"; */
  font-family: 'Chenyuluoyan-Monospaced';
  font-weight: 400;
}

canvas,
caption,
center,
cite,
code,
dd,
del,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
font,
form,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
menu,
object,
ol,
p,
pre,
q,
s,
samp,
small,
span,
strike,
strong,
sub,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
tr,
tt,
u,
ul,
var {
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

input {
  outline: none;
  padding: 0;
  border: 0;
  background-color: transparent;
}

li {
  list-style: none;
}

button {
  border: 0;
  background: transparent;
  padding: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
}


`;

export const GlobalStyle = createGlobalStyle`
  /* h1 {
    font-size: 4.8rem;
  }

  h2 {
    font-size: 3.2rem;
  }

  h3 {
    font-size: 2.6rem;
  }

  h4 {
    font-size: 2.4rem;
  }

  h5 {
    font-size: 2.2rem;
  }

  h6 {
    font-size: 2rem;
  }

  p {
    font-size: 2.2rem;
  } */

  h1 {
    font-family: 'Noto-Serif-TC';
    font-style: normal;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  h2 {
    font-family: 'Noto-Serif-TC';
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  h3 {
    font-family: 'Noto-Serif-TC';
    font-style: normal;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  h4 {
    font-family: 'Noto-Serif-TC';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  h5 {
    font-family: 'Noto-Serif-TC';
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  h6 {
    font-family: 'Noto-Serif-TC';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  label {
    font-family: 'Noto-Serif-TC';
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p {
    font-family: "Noto-Serif-TC";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
  }
`;
