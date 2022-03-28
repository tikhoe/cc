import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Layout from "./pages/Layout";
import DS from "./pages/DS";
import QM from "./pages/QM";
import CF from "./pages/CF";
import Admin from "./pages/Admin";
import Modal from "./components/misc/modals/Modal1";

class App extends React.Component {
  // use the url to determine which page to show, instead of hard coding
  render() {
    return (
      <Router>
          <Layout>
          <Modal />
          <Route exact path='/ds/:page/' component={DS}/>
          <Route exact path='/qm/' component={QM}/>
          <Route exact path='/cf/' component={CF}/>
          <Route exact path='/admin/:page?/' component={Admin}/>
          <Switch>
            <Redirect exact from="/ds/" to="/ds/dashboard/" />
            <Redirect exact from="/qm/" to="/qm/dashboard/" />
            <Redirect exact from="/cf/" to="/cf/dashboard/" />

          </Switch>
        </Layout>
      </ Router>
    );
  }
}

export default App
