import { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "@/style/theme";

import { ResetStyle, GlobalStyle } from "@/style/globalStyle.js";
import Navbar from "@/components/navbar/navbar.component";
import UploadFile from "@/components/upload-file/upload-file.component";
import StepDetail from "@/components/step-detail/step-detail.component";
import Footer from "@/components/footer/footer.component";

const Main = styled.main`
  width: 100%;
  padding: 4rem 7.2rem 3.7rem;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <Navbar />
      <Main>
        <UploadFile />
        <StepDetail />
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
