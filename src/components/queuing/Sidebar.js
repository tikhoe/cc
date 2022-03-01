import React from 'react';
import { NavLink } from 'react-router-dom';

// components
import MyServices from './sidebar/MyServices';

class Sidebar extends React.Component {
    
    render(){
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
                    <li className="active">
                        <NavLink to='/queuing/tickets/'>
                            <ion-icon name="home-outline"></ion-icon>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/queuing/analytics/'>
                            <ion-icon name="bar-chart-outline"></ion-icon>
                            Analytics
                        </NavLink>
                    </li>
                     <li>
                        <NavLink to='/queuing/agents/'>
                            <ion-icon name="people-outline"></ion-icon>
                            Agents
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/sign-out/'>
                            <ion-icon name="log-out-outline"></ion-icon>
                            Sign Out
                        </NavLink>
                    </li>
                </ul>

                <MyServices />
            </nav>
        )
    }
}
  
export default Sidebar

