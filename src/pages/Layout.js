import React from 'react';

// components

import Sidebar from "../components/layout/Sidebar";
import Content from "../components/layout/Content";
import '../assets/css/Layout.css'
import '../assets/css/Table.css'
import '../assets/css/Buttons.css'
import '../assets/css/Colors.css'

class Layout extends React.Component {
    render(){
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

