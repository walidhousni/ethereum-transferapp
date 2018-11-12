import React from "react";

import Header from "../components/Header/Header";
import Inputs from '../components/Inputs/Input'
import Button from "@material-ui/core/Button";

const Layout = props => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
     
    </div>
  );
};

export default Layout;
