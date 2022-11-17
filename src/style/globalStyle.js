import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
html,
body {
  margin: 0;
  height: 100%;
  font-size: 62.5%;
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

  @font-face {
    font-family: 'ChenYuluoyan-thin';
    src: url("../assets/font/ChenYuluoyan-Thin.ttf") format("truetype");
    font-style: normal;
    font-weight: 100;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("../assets/font/NotoSerifTC-ExtraLight.otf") format("opentype");
    font-style: normal;
    font-weight: 200;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("../assets/font/NotoSerifTC-Light.otf") format("opentype");
    font-style: normal;
    font-weight: 300;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("../assets/font/NotoSerifTC-Regular.otf") format("opentype");
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("../assets/font/NotoSerifTC-Medium.otf") format("opentype");
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("../assets/font/NotoSerifTC-SemiBold.otf") format("opentype");
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("../assets/font/NotoSerifTC-Bold.otf") format("opentype");
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: 'Noto-Serif-TC';
    src: url("../assets/font/NotoSerifTC-Bold.otf") format("opentype");
    font-style: normal;
    font-weight: 900;
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
    font-size: 3.2rem;
  }

  h2 {
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
  }

  h5 {
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
  }

  h6 {
    font-size: 1.2rem;
  }

  p {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
  }
`;
