import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'

import Layout from "./hoc/layout";

const Routes = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </div>
  );
};

export default Routes;
