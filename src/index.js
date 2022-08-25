import React from "react";
import ReactDOM from "react-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// css
import "react-phone-number-input/style.css";

import store from "./store/redux/store";
// import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
