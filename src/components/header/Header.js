import React from 'react';
import { connect } from 'react-redux';
import Logo from '../../assets/img/logo.png';
import Product from "../../assets/img/1.png";
import ProfileImage from '../../assets/img/profile.png';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import { FoodCategories } from '../../store/constants';

// components

class Header extends React.Component {



    render(){


        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 8,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
                autoplaySpeed: 2000,
                cssEase: "linear",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };



    return (
        <div class="homepage-header">
        <div class="overlay"></div>
        <nav class="navbar navbar-expand-lg navbar-dark osahan-nav">
            <div class="container">
                <Link class="navbar-brand" to="/">
                    <img
                        style={{width: 100}}
                        alt="logo"
                        src={Logo}/></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> <span
                        class="navbar-toggler-icon"></span> </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active"> <Link class="nav-link"
                                to="/">Home <span
                                    class="sr-only">(current)</span></Link> </li>
                        <li class="nav-item"> 
                            <Link class="nav-link"
                                to="/offers"><i
                                    class="icofont-sale-discount"></i> Offers <span
                                    class="badge badge-warning">New</span>
                            </Link>
                        </li>
                        <li class="nav-item dropdown"> 
                            <Link class="nav-link"
                                to="/restaurants" role="button"
                                 aria-haspopup="true" aria-expanded="false">
                                Restaurants
                            </Link>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle"
                                to="/accounts" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img
                                    alt="Generic placeholder image"
                                    src={ProfileImage}
                                    class="nav-osahan-pic rounded-pill"/> My Account </Link>
                            <div class="dropdown-menu dropdown-menu-right shadow-sm border-0"> <Link class="dropdown-item"
                                    to="/accounts"><i
                                        class="icofont-food-cart"></i> Orders</Link>
                                         <Link class="dropdown-item"
                                    to="/accounts"><i
                                        class="icofont-sale-discount"></i> Offers</Link> <Link class="dropdown-item"
                                    to="/accounts"><i
                                        class="icofont-heart"></i> Favourites</Link> <Link class="dropdown-item"
                                    to="/accounts"><i
                                        class="icofont-credit-card"></i> Payments</Link> <Link class="dropdown-item"
                                    to="/accounts"><i
                                        class="icofont-location-pin"></i> Addresses</Link> 
                            </div>
                        </li>
                        <li class="nav-item dropdown dropdown-cart">
                            <Link class="nav-link dropdown-toggle"
                                to="/" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i
                                    class="fas fa-shopping-basket"></i> Cart <span class="badge badge-success">5</span>
                            </Link>
                            <div class="dropdown-menu dropdown-cart-top p-0 dropdown-menu-right shadow-sm border-0">
                                <div class="dropdown-cart-top-header p-4"> <img class="img-fluid mr-3" alt="osahan"
                                        source={Logo}/>
                                    <h6 class="mb-0">Furstenhof Restaurant & Bar</h6>
                                    <p class="text-secondary mb-0">4 Frans Indongo Street, Windhoek</p> <small><Link
                                            class="text-primary font-weight-bold"
                                            to="/">View
                                            Full Menu</Link></small>
                                </div>
                                <div class="dropdown-cart-top-body border-top p-4">
                                    <p class="mb-2"><i class="icofont-ui-press text-danger food-item"></i> Chicken Tikka
                                        Sub 12" (30 cm) x 1 <span class="float-right text-secondary">N$314</span></p>
                                    <p class="mb-2"><i class="icofont-ui-press text-success food-item"></i> Corn &amp;
                                        Peas Salad x 1 <span class="float-right text-secondary">N$209</span></p>
                                    <p class="mb-2"><i class="icofont-ui-press text-success food-item"></i> Veg Seekh
                                        Sub 6" (15 cm) x 1 <span class="float-right text-secondary">N$133</span></p>
                                    <p class="mb-2"><i class="icofont-ui-press text-danger food-item"></i> Chicken Tikka
                                        Sub 12" (30 cm) x 1 <span class="float-right text-secondary">N$314</span></p>
                                    <p class="mb-2"><i class="icofont-ui-press text-danger food-item"></i> Corn &amp;
                                        Peas Salad x 1 <span class="float-right text-secondary">N$209</span></p>
                                </div>
                                <div class="dropdown-cart-top-footer border-top p-4">
                                    <p class="mb-0 font-weight-bold text-secondary">Sub Total <span
                                            class="float-right text-dark">N$499</span></p> <small class="text-info">Extra
                                        charges may apply</small>
                                </div>
                                <div class="dropdown-cart-top-footer border-top p-2"> 
                                        <Link class="btn btn-success btn-block btn-lg"
                                        to="/checkout">
                                        Checkout</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <section class="pt-5 pb-5 homepage-search-block position-relative">
            <div class="banner-overlay"></div>
            <div class="container">
                <div class="row d-flex align-items-center py-lg-4">
                    <div class="col-lg-8 mx-auto">
                        <div class="homepage-search-title text-center">
                            <h1 class="mb-2 display-4 text-shadow text-white font-weight-normal"><span
                                    class="font-weight-bold">Discover the best food &amp; drinks in Namibia 🇳🇦 
                                </span></h1>
                            <h5 class="mb-5 text-shadow text-white-50 font-weight-normal">Lists of top restaurants,
                                cafes, pubs, and bars in Windhoek, based on trends</h5>
                        </div>
                        <div class="homepage-search-form">
                            <form class="form-noborder">
                                <div class="form-row">
                                    <div class="col-lg-3 col-md-3 col-sm-12 form-group">
                                        <div class="location-dropdown"> <i class="icofont-location-arrow"></i>
                                            <select class="custom-select form-control-lg">
                                                <option> Quick Searches </option>
                                                <option> Breakfast </option>
                                                <option> Lunch </option>
                                                <option> Dinner </option>
                                                <option> Cafés </option>
                                                <option> Delivery </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 col-md-7 col-sm-12 form-group">
                                        <input type="text" placeholder="Search for restaurants or dishes"
                                            class="form-control form-control-lg"/> <Link class="locate-me"
                                            to="/"><i
                                                class="icofont-ui-pointer"></i> Locate Me</Link>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 form-group"> <Link
                                            to="/"
                                            class="btn btn-primary btn-block btn-lg btn-gradient">Search</Link> </div>
                                </div>
                            </form>
                        </div>
                        <h6 class="mt-4 text-shadow text-white font-weight-normal">E.g. Beverages, Pizzas, Chinese,
                            Bakery, Indian...</h6>


                        <Slider {...settings}>

                            {
                                FoodCategories.map((item, index)=>(
                                <div class="item">
                                <div class="osahan-category-item">
                                    <Link to="/"> <img
                                            class="img-fluid"
                                            src={Product}
                                            alt=""/>
                                        <h6>{item.name}</h6>
                                        <p>156</p>
                                    </Link>
                                </div>
                            </div>

                                ))
                            }

                        </Slider>


                        <div class="owl-carousel owl-carousel-category owl-theme">
                            
                            <div class="item">
                                <div class="osahan-category-item">
                                    <Link to="/"> <img
                                            class="img-fluid"
                                            source={Logo}
                                            alt=""/>
                                        <h6>Pizza</h6>
                                        <p>120</p>
                                    </Link>
                                </div>
                            </div>
                            <div class="item">
                                <div class="osahan-category-item">
                                    <Link to="/"> <img
                                            class="img-fluid"
                                            source={Logo}
                                            alt=""/>
                                        <h6>Healthy</h6>
                                        <p>130</p>
                                    </Link>
                                </div>
                            </div>
                            <div class="item">
                                <div class="osahan-category-item">
                                    <Link to="/"> <img
                                            class="img-fluid"
                                            source={Logo}
                                            alt=""/>
                                        <h6>Vegetarian</h6>
                                        <p>120</p>
                                    </Link>
                                </div>
                            </div>
                            <div class="item">
                                <div class="osahan-category-item">
                                    <Link to="/"> <img
                                            class="img-fluid"
                                            source={Logo}
                                            alt=""/>
                                        <h6>Chinese</h6>
                                        <p>111</p>
                                    </Link>
                                </div>
                            </div>
                            <div class="item">
                                <div class="osahan-category-item">
                                    <Link to="/"> <img
                                            class="img-fluid"
                                            source={Logo}
                                            alt=""/>
                                        <h6>Hamburgers</h6>
                                        <p>958</p>
                                    </Link>
                                </div>
                            </div>
                            <div class="item">
                                <div class="osahan-category-item">
                                    <Link to="/"> <img
                                            class="img-fluid"
                                            source={Logo}
                                            alt=""/>
                                        <h6>Dessert</h6>
                                        <p>56</p>
                                    </Link>
                                </div>
                            </div>
                            <div class="item">
                                <div class="osahan-category-item">
                                    <Link to="/"> <img
                                            class="img-fluid"
                                            source={Logo}
                                            alt=""/>
                                        <h6>Chicken</h6>
                                        <p>40</p>
                                    </Link>
                                </div>
                            </div>
                            <div class="item">
                                <div class="osahan-category-item">
                                    <Link to="/"> <img
                                            class="img-fluid"
                                            source={Logo}
                                            alt=""/>
                                        <h6>Indian</h6>
                                        <p>156</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
    Header
);

