import { Route, Routes, useLocation } from "react-router-dom"; 
import { ThemeProvider } from "styled-components";

import theme from "@/style/theme";
import { ResetStyle, GlobalStyle } from "@/style/globalStyle.js";

import Home from "@/routes/home/home.component"
import Signature from "@/routes/signature/signature.component";
import RenamePopup from "@/components/popup/rename/rename.component";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <ModalSwitch />
          {/* <Route path="signature">
            <Route index element={<Signature />} />
            <Route path="rename" element={<RenamePopup />} />
          </Route> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

function ModalSwitch() {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
      <>
        <Route location={background || location}>
          <Route path="signature" element={<Signature />} />
        </Route>
        {background && <Route path="rename" element={<RenamePopup />} />}
      </>
    );
}

export default App;
