import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import {thunk}  from "redux-thunk";
import newsReducer from './store/recentnews/reducers/PersonsReducer'
import userReducer from "./store/user/reducers/userReducer";
import './index.css'
const rootReducer = combineReducers({
  news: newsReducer,
  user:userReducer,
 
 
});

const { persistStore, persistReducer } = require("redux-persist");

let devtools, store;
const isClient = typeof window !== "undefined";
if (isClient) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

  const storage = require("redux-persist/lib/storage").default;
  const persistConfig = {
    key: "digital-empires",
    storage,
  };

  store = createStore(
    
    persistReducer(persistConfig, rootReducer),
    compose(applyMiddleware(thunk), devtools)
  );
  

  store.__PERSISTOR = persistStore(store);
} else {
  store = (rootReducer, compose(applyMiddleware(thunk)));
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
