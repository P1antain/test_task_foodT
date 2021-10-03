import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/Layout";
import Base from "../Page/Base/Base";
import Sets from "../Page/Goods/Sets/Sets";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path={"/"}>
            <Base />
          </Route>
          <Route path={"/goods/sets"}>
            <Sets />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
