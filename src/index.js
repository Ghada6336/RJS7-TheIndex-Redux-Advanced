import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";



import { Provider } from "react-redux";
import store from "./redux";//added
import App from "./App";

import { fetchAuthors, fetchBooks } from "./redux/actions";//added

store.dispatch(fetchAuthors());//added
store.dispatch(fetchBooks());//added
//modified
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
