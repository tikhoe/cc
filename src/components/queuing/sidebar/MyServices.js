import React from 'react';
import { Link } from 'react-router-dom';

// components

const MyServices =(props)=>{

    const apps = ["Digital Signage", "Queue Management", "Customer Feedback", "Admin"]
    const myApps = apps.length
        ?   apps.map( ( data, index ) => 
                <Link to="/qm/" key={ index }>{ data }</Link>
            )
        :   <div>There are no apps available for you.</div>

    return (
        <div className="sidebar-footer">
            <h5>My Apps</h5>
            { myApps }
        </div>
    )
}

export default MyServices;