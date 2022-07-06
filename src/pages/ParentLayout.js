import React from 'react';

// components

import Header from "../components/header/Header";
import Footer from '../components/footer/Footer';
//import Content from "../components/queuing/Content";
import '../assets/css/Layout.css'

class ParentLayout extends React.Component {
    render(){
        console.log('====================================');
        console.log(this.props.children);
        console.log('====================================');
        return (
            <div className="wrapper">
                <div className="wrapper">
                <Header />
                        
                <Footer />
                </div>
            </div>
        )   
    }
}

export default ParentLayout

