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
import User from "./pages/User";

class App extends React.Component {
  // use the url to determine which page to show, instead of hard coding
  render() {
    return <Router>
      <Layout>
          <Routes>
              <Route path="/ds/:page/" element={<DS/>} />
              <Route path="/qm/" element={<QM/>} />
              <Route path="/cf/" element={CF} />
              <Route path="/admin/" element={<Admin/>} />
              <Route path="/admin/users/" element={<User/>} />
          </Routes>
        </Layout>;
    </ Router>
  }
}

export default App
