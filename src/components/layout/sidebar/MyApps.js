import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { apps } from '../../../store/constants';

import { updateCurrentApp } from '../../../store/actions/settingsActions';

class MyServices extends React.Component {

    render(){
        const { updateCurrentApp } = this.props;
        
        const myApps = apps.length
            ?   apps.map( ( data, index ) => 
                    <Link to={ data.path } key={ index } onClick={ () => updateCurrentApp( data.shortName ) }>{ data.name }</Link>
                )
            :   <div>There are no apps available for you.</div>

        return (
            <div className="sidebar-footer">
                <h5>My Apps</h5>
                { myApps }
            </div>
        )
    }
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