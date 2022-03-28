import React from 'react';
import Dashboard from '../components/apps/ds/Dashboard';
import Default from '../components/apps/ds/Default';

// components

class DS extends React.Component {

    components = {
        'dashboard': Dashboard,
        'default':  Default
    }

    render(){
    const { page } = this.props;
    const DynamicComponent = page != null 
        ?   this.components[page]
        :   Default 
    return <DynamicComponent />
            
    }
}

export default DS

