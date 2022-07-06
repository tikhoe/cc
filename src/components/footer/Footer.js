import React from 'react';
import { connect } from 'react-redux';
import GoogleIcon from '../../assets/img/google.png'
import AppleIcon from '../../assets/img/apple.png'

// components

class Footer extends React.Component {


    render(){
    return (
        <div>
            <section class="footer pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-12 col-sm-12">
                    <h6 class="mb-3">Subscribe to our Newsletter</h6>
                    <form class="newsletter-form mb-1">
                        <div class="input-group">
                            <input type="text" placeholder="Please enter your email" class="form-control"/>
                            <div class="input-group-append">
                                <button type="button" class="btn btn-primary"> Subscribe </button>
                            </div>
                        </div>
                    </form>
                    <p><a class="text-info"
                            href="https://askbootstrap.com/preview/osahan-eat/theme-2/register.html">Register now</a> to
                        get updates on <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/offers.html">Offers
                            and Coupons</a></p>
                    <div class="app">
                        <p class="mb-2">DOWNLOAD APP</p>
                        <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#"> <img
                                class="img-fluid"
                                src={GoogleIcon}/> </a>
                        <a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#"> <img
                                class="img-fluid"
                                src={AppleIcon}/> </a>
                    </div>
                </div>
                <div class="col-md-1 col-sm-6 mobile-none"> </div>
                <div class="col-md-2 col-6 col-sm-4">
                    <h6 class="mb-3">About OE</h6>
                    <ul>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">About Us</a></li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Culture</a></li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Blog</a></li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Careers</a></li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-6 col-sm-4">
                    <h6 class="mb-3">For Foodies</h6>
                    <ul>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Community</a></li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Developers</a>
                        </li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Blogger Help</a>
                        </li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Verified Users</a>
                        </li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Code of
                                Conduct</a></li>
                    </ul>
                </div>
                <div class="col-md-2 m-none col-4 col-sm-4">
                    <h6 class="mb-3">For Restaurants</h6>
                    <ul>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Advertise</a></li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Add a
                                Restaurant</a></li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Claim your
                                Listing</a></li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">For Businesses</a>
                        </li>
                        <li><a href="https://askbootstrap.com/preview/osahan-eat/theme-2/index.html#">Owner
                                Guidelines</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <footer class="pt-4 pb-4 text-center bg-white">
            <div class="container">
                <p class="mt-0 mb-0">© Copyright 2022 Eat@United. All Rights Reserved</p> <small class="mt-0 mb-0"> Made
                    with <i class="fas fa-heart heart-icon text-danger"></i> by 
                    <a class="text-danger" target="_blank" href=""> Loyal Codes - 
                        Black Hammer IT</a>
                </small>
            </div>
        </footer>
        </div>
        
    )
            
    }
}

const mapStateToProps = (state) => {
    return {
    };
  };

export default connect(mapStateToProps, {
  
})(
    Footer
);

