import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SignUp extends React.Component {

  render() {
    return (
     <React.Fragment>

<div class="container-fluid">
        <div class="row no-gutter">
            <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div class="col-md-8 col-lg-6">
                <div class="login d-flex align-items-center py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-9 col-lg-8 mx-auto pl-5 pr-5">
                                <h3 class="login-heading mb-4">New Buddy!</h3>
                                <form>
                                    <div class="form-label-group">
                                        <input type="email" id="inputEmail" class="form-control"
                                            placeholder="Email address"/>
                                        <label for="inputEmail">Email address / Mobile</label>
                                    </div>
                                    <div class="form-label-group">
                                        <input type="password" id="inputPassword" class="form-control"
                                            placeholder="Password"/>
                                        <label for="inputPassword">Password</label>
                                    </div>
                                    <div class="form-label-group mb-4">
                                        <input type="text" id="ptext" class="form-control" placeholder="Promocode"/>
                                        <label for="ptext">Promocode</label>
                                    </div> <a href=""
                                        class="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign
                                        Up</a>
                                    <div class="text-center pt-3"> Already have an Account?
                                         <Link class="font-weight-bold"
                                            to="/accounts/sign-in">Sign
                                            In
                                        </Link>
                                     </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

     </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, {
  
 })(
    SignUp
);
