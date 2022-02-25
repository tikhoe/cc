import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./pages/Layout";
import DS from "./pages/DS";

class App extends React.Component {

  render() {
    return <Router>
      <Layout>
        <DS />
      </Layout>;
    </ Router>
  }
}

export default App
