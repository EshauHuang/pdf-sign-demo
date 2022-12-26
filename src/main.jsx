import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import pdfjs from "pdfjs-dist";

import App from "./App";

pdfjs.GlobalWorkerOptions.workerSrc = "https://d2v5g.csb.app/pdf.worker.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
