import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Switch,
} from "react-router-dom";

import Layout from "./pages/Layout";
import DS from "./pages/DS";
import QM from "./pages/QM";
import CF from "./pages/CF";
import Admin from "./pages/Admin";

class App extends React.Component {
  // use the url to determine which page to show, instead of hard coding
  render() {
    return <Router>
      <Layout>
        <Route exact path="/ds/" component={DS} />
        <Route exact path="/qm/" component={QM} />
        <Route exact path="/cf/" component={CF} />
        <Route exact path="/admin/" component={Admin} />
        <Navigate exact from="/" to="/ds/" />
      </Layout>;
    </ Router>
  }
}

export default App
