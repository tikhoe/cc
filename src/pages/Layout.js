import React from 'react';

// components
import Queuing from '../components/Queuing.js'
import '../assets/css/Layout.css'

class Layout extends React.Component {
    render(){

        return (
            <div className="wrapper">
                <Queuing children={this.props.children} />
            </div>
        )   
    }
}

export default Layout

