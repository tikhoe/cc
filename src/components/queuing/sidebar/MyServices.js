import React from 'react';

// components

function MyServices(props){

    const apps = ["Digital Signage", "Queue Management", "Customer Feedback", "Admin"]
    const myApps = apps.length
        ?   apps.map( ( data, index ) => 
                <div key={ index }>{ data }</div>
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