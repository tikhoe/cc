import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Product1 from '../assets/img/pro1.jpg';
import Product2 from '../assets/img/pro2.jpg';
import Product3 from '../assets/img/pro3.jpg';
import Product4 from '../assets/img/pro4.jpg';

import Product5 from '../assets/img/1.png';
import Product6 from '../assets/img/2.png';
import Product7 from '../assets/img/3.png';
import Product8 from '../assets/img/4.png';


//css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// components

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { RestaurantsList, FootCategories } from '../store/constants';


class Home extends React.Component {


    render(){


      

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
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
        <div>
            <Header/>
                <section class="section pt-5 pb-5 bg-white homepage-add-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-6">
                                <div class="products-box">
                                    <Link to="#"><img alt=""
                                            src={Product1}
                                            class="img-fluid rounded"/></Link>
                                </div>
                            </div>
                            <div class="col-md-3 col-6">
                                <div class="products-box">
                                <Link to="#"><img alt=""
                                            src={Product2}
                                            class="img-fluid rounded"/></Link>
                                </div>
                            </div>
                            <div class="col-md-3 col-6">
                                <div class="products-box">
                                <Link to="#"><img alt=""
                                            src={Product3}
                                            class="img-fluid rounded"/></Link>
                                </div>
                            </div>
                            <div class="col-md-3 col-6">
                                <div class="products-box">
                                <Link to="#"><img alt=""
                                            src={Product4}
                                            class="img-fluid rounded"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="section pt-5 pb-5 products-section">
        <div class="container">
            <div class="section-header text-center">
                <h2>Popular Restaurants</h2>
                <p>Top restaurants, cafes, pubs, and bars in Windhoek, based on trends</p> <span class="line"></span>
            </div>
            <div class="row">
                <div class="col-md-12">

                <Slider class="owl-carousel owl-carousel-four owl-theme" {...settings}>
                    {
                        RestaurantsList.map((item, index)=>(
                            <div style={{padding:10}} class="item">
                            <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div class="list-card-image">
                                    <div class="star position-absolute"><span class="badge badge-success"><i
                                                class="icofont-star"></i> 3.1 (300+)</span></div>
                                    <div class="favourite-heart text-danger position-absolute"><Link
                                            to="restaurant/home"><i
                                                class="icofont-heart"></i></Link></div>
                                    <div class="member-plan position-absolute"><span
                                            class="badge badge-dark">Promoted</span></div>
                                    <Link to="restaurant/home"> <img
                                            src={Product5}
                                            class="img-fluid item-img"/> </Link>
                                </div>
                                <div class="p-3 position-relative">
                                    <div class="list-card-body">
                                        <h6 class="mb-1"><Link
                                                to="restaurant/home"
                                                class="text-black">{item.name}</Link></h6>
                                        <p class="text-gray mb-3">North • Namibian • Pure veg</p>
                                        <p class="text-gray mb-3 time"><span
                                                class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"><i
                                                    class="icofont-wall-clock"></i> 20–25 min</span> <span
                                                class="float-right text-black-50"> $250 FOR TWO</span></p>
                                    </div>
                                    <div class="list-card-badge"> <span class="badge badge-success">OFFER</span>
                                        <small>65% off | Use Coupon OSAHAN50</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                
                        
                    </Slider>


                    
                </div>
            </div>
        </div>
    </section>



    <section class="section pt-5 pb-5 bg-white becomemember-section border-bottom">
        <div class="container">
            <div class="section-header text-center white-text">
                <h2>Become a Member</h2>
                <p>Lorem Ipsum is simply dummy text of</p> <span class="line"></span>
            </div>
            <div class="row">
                <div class="col-sm-12 text-center">
                     <Link
                        to="/accounts/sign-up"
                        class="btn btn-success btn-lg">
                        Create an Account <i class="fa fa-chevron-circle-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    </section>

            <Footer/>
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
    Home
);

