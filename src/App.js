import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import Context from "../Context";
import Weather from "./pages/Weather/Weather";
import Search from "./pages/Search/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" exact component={Weather} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
