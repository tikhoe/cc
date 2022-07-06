import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { connect } from "react-redux";
import '../src/assets/css/main/bootstrap.min.css'
import '../src/assets/css/main/all.min.css'
import '../src/assets/css/main/icofont.min.css'
import '../src/assets/css/main/select2.min.css'
import '../src/assets/css/main/osahan.css'
import '../src/assets/css/main/owl.carousel.css'
import '../src/assets/css/main/owl.theme.css'


//Pages
import ParentLayout from "./pages/ParentLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Offers from "./pages/Offers";
import Checkout from "./pages/Checkout";
import Restaurant from "./pages/Restaurant";
import Restaurants from "./pages/Restaurants";
import SignUp from "./pages/SignUp";


//Actions

class App extends React.Component {
  // use the url to determine which page to show, instead of hard coding

  componentDidMount(){
  }

  render() {
    return <Router>
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/accounts/sign-in" element={<SignIn/>} />
                      <Route path="/accounts/sign-up" element={<SignUp/>} />
                      <Route path="/accounts" element={<User/>} />
                      <Route path="/offers" element={<Offers/>} />
                      <Route path="/checkout" element={<Checkout/>} />
                      <Route path="/restaurant/home" element={<Restaurant/>} />
                      <Route path="/restaurants" element={<Restaurants/>} />
                  </Routes>
          </ Router>
  }
}

const mapStateToProps = (state) =>{
const { admin } = state; 

}

export default connect(mapStateToProps, {
})(App);
