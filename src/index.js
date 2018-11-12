import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import reducers from "./reducers";
import Routes from "./routes";
import Web3 from 'web3';
import Web3Provider from 'react-web3-provider';



const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Web3Provider
  defaultWeb3Provider="https://mainnet.infura.io/YOUR_API_KEY"
  loading="Loading..."
  >
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
  </Web3Provider>,
  document.getElementById("root")
  
);
