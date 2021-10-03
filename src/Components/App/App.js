import React from "react";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
      <>
      <Switch>
          <Route exact path={'/'}>
              Это главная
          </Route>
          <Route path={'/movies'}>
            Hello movies
          </Route>
      </Switch>
      </>
  );
}

export default App;
