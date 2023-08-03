import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
