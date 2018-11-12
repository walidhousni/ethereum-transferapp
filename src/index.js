import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Web3Provider from 'react-web3-provider';





ReactDOM.render(
  <Web3Provider
  defaultWeb3Provider="https://mainnet.infura.io/28bf2fddda6c4f558c286284ffd4e696"
  loading="Loading..."
  >
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Web3Provider>,
  document.getElementById("root")
  
);
