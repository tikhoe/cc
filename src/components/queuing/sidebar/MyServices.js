import React from 'react';
import { Link } from 'react-router-dom';
import {Apps} from '../../../store/constants';

// components

const MyServices =(props)=>{

    const myApps = Apps.length
        ?   Apps.map( ( data, index ) => 
                <Link to={data.slug} key={ index }>{ data.name }</Link>
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