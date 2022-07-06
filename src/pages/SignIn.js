import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SignIn extends React.Component {

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
								<h3 class="login-heading mb-4">Welcome back!</h3>
								<form>
									<div class="form-label-group">
										<input type="email" id="inputEmail" class="form-control" placeholder="Email address"/>
										<label for="inputEmail">Email address / Mobile</label>
									</div>
									<div class="form-label-group">
										<input type="password" id="inputPassword" class="form-control" placeholder="Password"/>
										<label for="inputPassword">Password</label>
									</div>
									<div class="custom-control custom-checkbox mb-3">
										<input type="checkbox" class="custom-control-input" id="customCheck1"/>
										<label class="custom-control-label" for="customCheck1">Remember password</label>
									</div> 
                  <Link to="/" class="btn btn-lg btn-outline-primary btn-block btn-login text-uppercase font-weight-bold mb-2">Sign in</Link>
									<div class="text-center pt-3"> Don’t have an account? <Link class="font-weight-bold" to="/accounts/sign-up">Sign Up</Link> </div>
								</form>
								<hr class="my-4"/>
								<p class="text-center">LOGIN WITH</p>
								<div class="row">
									<div class="col pr-2">
										<button class="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Google</button>
									</div>
									<div class="col pl-2">
										<button class="btn pl-1 pr-1 btn-lg btn-facebook font-weight-normal text-white btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Facebook</button>
									</div>
								</div>
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
  SignIn
);
