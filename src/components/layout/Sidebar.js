import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCurrentApp } from '../../store/actions/settingsActions';
import { navigation } from '../../store/constants';

// components
import MyApps from './sidebar/MyApps';

class Sidebar extends React.Component {
    
    render(){
        const { currentApp, updateCurrentApp } = this.props;

        const appMenuItems = navigation.find( n => n.app === currentApp)
        console.log(currentApp);
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <div className="sidebar-user">
                        <div className="user-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                <circle cx="10" cy="6" r="5" stroke="#0A0914" strokeWidth="1.527"/>
                                <path stroke="#0A0914" strokeWidth="1.527" d="M19 20c0-4.97-4.03-9-9-9s-9 4.03-9 9"/>
                            </svg>
                        </div>
                        <div className="user-name">
                            <h4>
                                Tikhoe Uirab
                            </h4>
                        </div>
                    </div>
                </div>

                <ul className="list-unstyled components">
                    {
                        appMenuItems.menuItems.map( (menuItem, index) => 
                            <li key={ index }>
                                <NavLink to={appMenuItems.path +""+ menuItem.path}>
                                    <ion-icon name={menuItem.icon}></ion-icon>
                                    {menuItem.name}
                                </NavLink>
                            </li>      
                        )
                    }
                    <li>
                        <NavLink to='/sign-out/'>
                            <ion-icon name="log-out-outline"></ion-icon>
                            Sign Out
                        </NavLink>
                    </li>
                </ul>

                <MyApps />
            </nav>
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
)(Sidebar);
