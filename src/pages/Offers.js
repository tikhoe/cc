import React from 'react';
import { connect } from 'react-redux';

// components
import LightHeader from '../components/header/LightHeader';
import Footer from '../components/footer/Footer';

class Offers extends React.Component {


    render(){
    return (
        <React.Fragment>
            <LightHeader/>


            <section class="breadcrumb-osahan pt-5 pb-5 bg-dark position-relative text-center">
		<h1 class="text-white">Offers for you</h1>
		<h6 class="text-white-50">Explore top deals and offers exclusively for you!</h6>
    </section>
	<section class="section pt-5 pb-5">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h4 class="font-weight-bold mt-0 mb-3">Available Coupons</h4> </div>
				<div class="col-md-4">
					<div class="card offer-card border-0 shadow-sm">
						<div class="card-body">
							<h5 class="card-title"><img src="./Osahan Eat - Online Food Ordering Website HTML Template_files/1.png"/> OSAHANEAT50</h5>
							<h6 class="card-subtitle mb-2 text-block">Get 50% OFF on your first osahan eat order</h6>
							<p class="card-text">Use code OSAHANEAT50 &amp; get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $200</p> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">COPY CODE</a> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">KNOW MORE</a> </div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card offer-card border-0 shadow-sm">
						<div class="card-body">
							<h5 class="card-title"><img src="./Osahan Eat - Online Food Ordering Website HTML Template_files/2.png"/> EAT730</h5>
							<h6 class="card-subtitle mb-2 text-block">Get 50% OFF on your first osahan eat order</h6>
							<p class="card-text">Use code EAT730 &amp; get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $600</p> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">COPY CODE</a> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">KNOW MORE</a> </div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card offer-card border-0 shadow-sm">
						<div class="card-body">
							<h5 class="card-title"><img src="./Osahan Eat - Online Food Ordering Website HTML Template_files/3.png"/> SAHAN50</h5>
							<h6 class="card-subtitle mb-2 text-block">Get 50% OFF on your first osahan eat order</h6>
							<p class="card-text">Use code SAHAN50 &amp; get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $200</p> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">COPY CODE</a> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">KNOW MORE</a> </div>
					</div>
				</div>
			</div>
			<div class="row mt-4 pt-2">
				<div class="col-md-4">
					<div class="card offer-card border-0 shadow-sm">
						<div class="card-body">
							<h5 class="card-title"><img src="./Osahan Eat - Online Food Ordering Website HTML Template_files/4(1).png"/> GURDEEP50</h5>
							<h6 class="card-subtitle mb-2 text-block">Get 50% OFF on your first osahan eat order</h6>
							<p class="card-text">Use code GURDEEP50 &amp; get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $600</p> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">COPY CODE</a> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">KNOW MORE</a> </div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card offer-card border-0 shadow-sm">
						<div class="card-body">
							<h5 class="card-title"><img src="./Osahan Eat - Online Food Ordering Website HTML Template_files/5.png"/> EA9T50</h5>
							<h6 class="card-subtitle mb-2 text-block">Get 50% OFF on your first osahan eat order</h6>
							<p class="card-text">Use code EAT50 &amp; get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $100</p> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">COPY CODE</a> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">KNOW MORE</a> </div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card offer-card border-0 shadow-sm">
						<div class="card-body">
							<h5 class="card-title"><img src="./Osahan Eat - Online Food Ordering Website HTML Template_files/6.png"/> ETTTAT50</h5>
							<h6 class="card-subtitle mb-2 text-block">Get 50% OFF on your first osahan eat order</h6>
							<p class="card-text">Use code EAT50 &amp; get 50% off on your first osahan order on Website and Mobile site. Maximum discount: $600</p> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">COPY CODE</a> <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html#" class="card-link">KNOW MORE</a> </div>
					</div>
				</div>
			</div>
			
		</div>
	</section>
	<section class="section pt-5 pb-5 text-center bg-white">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<h5 class="m-0">Operate food store or restaurants? <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/login.html">Work With Us</a></h5> </div>
			</div>
		</div>
	</section>

            <Footer/>
        </React.Fragment>
    )
            
    }
}

const mapStateToProps = (state) => {
    return {
    };
  };

export default connect(mapStateToProps, {
  
})(
    Offers
);

