import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
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
          <Routes>
              <Route exact path="/ds/" element={<DS/>} />
              <Route exact path="/qm/" element={<QM/>} />
              <Route exact path="/cf/" element={<CF/>} />
              <Route exact path="/admin/" element={<Admin/>} />
          </Routes>
          <Navigate exact from="/" to="/ds/" />
        </Layout>;
    </ Router>
  }
}

export default App
