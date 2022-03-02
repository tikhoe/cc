import React from 'react';

// components

import Sidebar from "../components/queuing/Sidebar";
import Content from "../components/queuing/Content";
import '../assets/css/Layout.css'

class Layout extends React.Component {
    render(){
        console.log('====================================');
        console.log(this.props.children);
        console.log('====================================');
        return (
            <div className="wrapper">
                <div className="wrapper">
                    <Sidebar />
                    <Content children={this.props.children} />
                </div>
            </div>
        )   
    }
}

export default Layout

