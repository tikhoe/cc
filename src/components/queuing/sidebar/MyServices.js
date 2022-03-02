import React from 'react';
import { Link } from 'react-router-dom';
import {Apps} from '../../../store/constants';
import { updateCurrentApp } from '../../../store/actions/settingsActions';
import { connect } from 'react-redux';

// components

const MyServices =(props)=>{
    const { updateCurrentApp } = props;
    
    const myApps = Apps.length
        ?   Apps.map( ( data, index ) => 
                <Link onClick={()=>updateCurrentApp(data.shortName)} to={data.slug} key={ index }>{ data.name }</Link>
            )
        :   <div>There are no apps available for you.</div>

    return (
        <div className="sidebar-footer">
            <h5>My Apps</h5>
            { myApps }
        </div>
    )
}

const mapStateToProps = state => {
    const { settings } = state
    return {
        currentApp: settings.currentApp,
  }
}
 
export default connect(mapStateToProps, 
    { 
        updateCurrentApp,
    }
)(MyServices);
