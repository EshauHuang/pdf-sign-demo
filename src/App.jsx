import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "@/style/theme";
import { ResetStyle, GlobalStyle } from "@/style/globalStyle.js";

import Home from "@/routes/home/home.component";
import Signature from "@/routes/signature/signature.component";
import RenamePopup from "@/components/popup/rename/rename.component";
import AddSignPopup from "@/components/popup/add-sign/add-sign.component";
import InvitePopup from "@/components/popup/invite/invite.component";
import Viewer from "@/components/viewer/viewer.component";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signature" element={<Signature />}>
            <Route path="rename" element={<RenamePopup />} />
            <Route path="add-sign" element={<AddSignPopup />} />
            <Route path="invite" element={<InvitePopup />} />
          </Route>
          <Route path="viewer" element={<Viewer />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
