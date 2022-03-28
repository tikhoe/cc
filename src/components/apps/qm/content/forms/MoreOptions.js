import { NavLink, useHistory } from 'react-router-dom'

// components
export default function MoreOptions() {
    let history = useHistory();
    return (
        <div className="home-center-content1 home-center-content3">
            <div className="titleBlock icon">
                <div className="iconWrapper" onClick={ () => history.push ('/queuing/tickets/')}><ion-icon name="arrow-back-outline"></ion-icon></div>
                <h4>More Options</h4>
                <h4>Back</h4>
            </div>
            <NavLink to='/'>Call ticket by number</NavLink>
            <NavLink to='/'>Re-Queue ticket</NavLink>
        </div>
    )
}
