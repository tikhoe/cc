import React from "react";
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Layout from "./pages/Layout";
import DS from "./pages/DS";
import QM from "./pages/QM";
import CF from "./pages/CF";
import Admin from "./pages/Admin";
import Modal from "./components/misc/modals/Modal1";

import { listenOrganizations } from "./store/actions/organizationsActions";
import { listenServices } from "./store/actions/servicesActions";
import { listenUsers } from "./store/actions/usersActions";
import { fetchBranches } from "./store/actions/branchesActions";

class App extends React.Component {
  // use the url to determine which page to show, instead of hard coding
  componentDidMount(){
    const { listenUsers, fetchBranches, listenOrganizations, listenServices } = this.props
    listenOrganizations()
    listenServices()
    listenUsers()
    fetchBranches()
  }

  render() {
    return (
      <Router>
        <Layout>
          <ToastContainer />
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


const mapStateToProps = state => {
  const { users } = state;
  return {
      user: users.user
  }
}

export default connect(mapStateToProps, {
  listenOrganizations,
  listenServices,
  listenUsers,
  fetchBranches,
})(App);