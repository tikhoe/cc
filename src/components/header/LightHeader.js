import React from "react";
import { connect } from "react-redux";
import Logo from '../../assets/img/logo_sticky.png';
import ProfileImage from '../../assets/img/profile.png';
import { Link } from 'react-router-dom';

class LightHeader extends React.Component {


  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light osahan-nav shadow-sm">
		<div class="container">
			<Link class="navbar-brand" to="/"><img style={{width:100}} alt="logo" src={Logo}/></Link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active"> 
                        <Link class="nav-link" to="/">
                            Home 
                            <span class="sr-only">(current)</span>
                        </Link>
                    </li>
					<li class="nav-item"> 
                        <Link class="nav-link" to="/offers">
                            <i class="icofont-sale-discount"></i> 
                            Offers <span class="badge badge-danger">New</span>
                        </Link>
                    </li>
					
                    <li class="nav-item dropdown"> 
                        <Link class="nav-link" to="/restaurants" role="button" aria-expanded="false">
                        Our Restaurants
                        </Link>
					</li>
				
					<li class="nav-item dropdown">
						<Link class="nav-link dropdown-toggle" to="/offers" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <img alt="Generic placeholder image" src={ProfileImage} class="nav-osahan-pic rounded-pill"/>
                              My Account
                        </Link>
						<div class="dropdown-menu dropdown-menu-right shadow-sm border-0">
                            <Link class="dropdown-item" to="/accounts#orders"><i class="icofont-food-cart"></i> Orders</Link>
                            <Link class="dropdown-item" to="/accounts#offers"><i class="icofont-sale-discount"></i> Offers</Link>
                            <Link class="dropdown-item" to="/accounts#favourites"><i class="icofont-heart"></i> Favourites</Link>
                            <Link class="dropdown-item" to="/accounts#payments"><i class="icofont-credit-card"></i> Payments</Link>
                            <Link class="dropdown-item" to="/accounts#addresses"><i class="icofont-location-pin"></i> Addresses</Link>
                        </div>
					</li>
					<li class="nav-item dropdown dropdown-cart">
						<Link class="nav-link dropdown-toggle" to="/accounts" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fas fa-shopping-basket"></i> Cart <span class="badge badge-success">5</span> </Link>
						<div class="dropdown-menu dropdown-cart-top p-0 dropdown-menu-right shadow-sm border-0">
							<div class="dropdown-cart-top-header p-4"> <img class="img-fluid mr-3" alt="osahan" src="./Osahan Eat - Online Food Ordering Website HTML Template_files/cart.jpg"/>
								<h6 class="mb-0">Gus's World Famous Chicken</h6>
								<p class="text-secondary mb-0">310 S Front St, Memphis, USA</p> <small><a class="text-primary font-weight-bold" href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#">View Full Menu</a></small> </div>
							<div class="dropdown-cart-top-body border-top p-4">
								<p class="mb-2"><i class="icofont-ui-press text-danger food-item"></i> Chicken Tikka Sub 12" (30 cm) x 1 <span class="float-right text-secondary">$314</span></p>
								<p class="mb-2"><i class="icofont-ui-press text-success food-item"></i> Corn &amp; Peas Salad x 1 <span class="float-right text-secondary">$209</span></p>
								<p class="mb-2"><i class="icofont-ui-press text-success food-item"></i> Veg Seekh Sub 6" (15 cm) x 1 <span class="float-right text-secondary">$133</span></p>
								<p class="mb-2"><i class="icofont-ui-press text-danger food-item"></i> Chicken Tikka Sub 12" (30 cm) x 1 <span class="float-right text-secondary">$314</span></p>
								<p class="mb-2"><i class="icofont-ui-press text-danger food-item"></i> Corn &amp; Peas Salad x 1 <span class="float-right text-secondary">$209</span></p>
							</div>
							<div class="dropdown-cart-top-footer border-top p-4">
								<p class="mb-0 font-weight-bold text-secondary">Sub Total <span class="float-right text-dark">$499</span></p> <small class="text-info">Extra charges may apply</small> </div>
							<div class="dropdown-cart-top-footer border-top p-2">
                                 <Link class="btn btn-success btn-block btn-lg" to="/checkout"> Checkout</Link>
                            </div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</nav>
    );
  }
}


const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, {
  
 })(
    LightHeader
);
