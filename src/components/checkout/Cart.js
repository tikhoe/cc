import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cart extends React.Component{
    render(){
        return(
            <React.Fragment>

                    <div class="generator-bg rounded shadow-sm mb-4 p-4 osahan-cart-item">
						<h5 class="mb-1 text-white">Your Order</h5>
						<p class="mb-4 text-white">6 ITEMS</p>
						<div class="bg-white rounded shadow-sm mb-2">
							<div class="gold-members p-2 border-bottom">
								<p class="text-gray mb-0 float-right ml-2">$314</p> <span class="count-number float-right">
                                <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                                <input onChange={{}} class="count-number-input" type="text" value="1" readonly=""/>
                                <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                                </span>
								<div class="media">
									<div class="mr-2"><i class="icofont-ui-press text-danger food-item"></i></div>
									<div class="media-body">
										<p class="mt-1 mb-0 text-black">Chicken Tikka Sub</p>
									</div>
								</div>
							</div>
							<div class="gold-members p-2 border-bottom">
								<p class="text-gray mb-0 float-right ml-2">$260</p> <span class="count-number float-right">
                                    <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                                    <input onChange={{}} class="count-number-input" type="text" value="1" readonly=""/>
                                    <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                                    </span>
								<div class="media">
									<div class="mr-2"><i class="icofont-ui-press text-success food-item"></i></div>
									<div class="media-body">
										<p class="mt-1 mb-0 text-black">Cheese corn Roll</p>
									</div>
								</div>
							</div>
							<div class="gold-members p-2 border-bottom">
								<p class="text-gray mb-0 float-right ml-2">$260</p> <span class="count-number float-right">
                                <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                                <input onChange={{}} class="count-number-input" type="text" value="1" readonly=""/>
                                <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                                </span>
								<div class="media">
									<div class="mr-2"><i class="icofont-ui-press text-success food-item"></i></div>
									<div class="media-body">
										<p class="mt-1 mb-0 text-black">Cheese corn Roll</p>
									</div>
								</div>
							</div>
							<div class="gold-members p-2 border-bottom">
								<p class="text-gray mb-0 float-right ml-2">$056</p> <span class="count-number float-right">
                                <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                                <input onChange={{}} class="count-number-input" type="text" value="1" readonly=""/>
                                <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                                </span>
								<div class="media">
									<div class="mr-2"><i class="icofont-ui-press text-success food-item"></i></div>
									<div class="media-body">
										<p class="mt-1 mb-0 text-black">Coke [330 ml]</p>
									</div>
								</div>
							</div>
							<div class="gold-members p-2 border-bottom">
								<p class="text-gray mb-0 float-right ml-2">$652</p> <span class="count-number float-right">
                                <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                                <input onChange={{}} class="count-number-input" type="text" value="1" readonly=""/>
                                <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                                </span>
								<div class="media">
									<div class="mr-2"><i class="icofont-ui-press text-danger food-item"></i></div>
									<div class="media-body">
										<p class="mt-1 mb-0 text-black">Black Dal Makhani</p>
									</div>
								</div>
							</div>
							<div class="gold-members p-2">
								<p class="text-gray mb-0 float-right ml-2">$122</p> <span class="count-number float-right">
                                <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                                <input onChange={{}} class="count-number-input" type="text" value="1" readonly=""/>
                                <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                                </span>
								<div class="media">
									<div class="mr-2"><i class="icofont-ui-press text-danger food-item"></i></div>
									<div class="media-body">
										<p class="mt-1 mb-0 text-black">Mixed Veg</p>
									</div>
								</div>
							</div>
						</div>
						<div class="mb-2 bg-white rounded p-2 clearfix"> <img class="img-fluid float-left" src="./Osahan Eat - Online Food Ordering Website HTML Template_files/wallet-icon.png"/>
							<h6 class="font-weight-bold text-right mb-2">Subtotal : <span class="text-danger">$456.4</span></h6>
							<p class="seven-color mb-1 text-right">Extra charges may apply</p>
							<p class="text-black mb-0 text-right">You have saved $955 on the bill</p>
						</div> 
                        <Link to="/checkout" class="btn btn-success btn-block btn-lg">Checkout <i class="icofont-long-arrow-right"></i></Link> 
                    </div>

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
    Cart
);

