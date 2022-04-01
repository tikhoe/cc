import React from 'react';
import { connect } from 'react-redux'

import {
    resetUser,
    deleteUser
} from "../../../../store/actions/usersActions";

import {
    modalUpdate
} from "../../../../store/actions/settingsActions";


class DeleteUser extends React.Component {
    constructor(){
        super()
        this.state = {
            verification: ''
        }
    }
    render(){

        const { user, services } = this.props
        const { deleteUser, resetUser, modalUpdate } = this.props

        return (
            <>  
                <h5>Delete User</h5>
                <div className="alertContainer scheme-pinkred-bg">
                    DANGER: Deleting an user is permanent. Please make sure you are deleting the correct user.
                </div>
                <div className="informationContainer">
                    <div className="informationRow">
                        <label>Name</label>
                        <span>{ user.name }</span>
                    </div>
                    <div className="informationRow">
                        <label>Lastname</label>
                        <span>{ user.lastname }</span>
                    </div>
                    <div className="informationRow noselect">
                        <label>Email</label>
                        <span>{ user.email }</span>
                    </div>
                    {
                        user.services.length 
                        ?   <div className="informationRow">
                                <label>Services</label>
                                {
                                    services.filter( data => user.services.includes(data.id) ).map((data, index) => <span className='pill lightGray-bg' key={index}>{data.name}</span>)
                                }
                            </div>
                        :   null
                    }
                </div>

                <div className="input-options">
                    <label><strong>Type the email address of the user you want to delete.</strong></label>
                    <input type="text"  value={ this.state.verification } onChange={ (e) => this.setState({ verification: e.target.value }) } placeholder="Type" />
                </div>

                {
                    this.state.verification === user.email
                    ?   <button className='pinkred-bg pullLeft' onClick={ () => { deleteUser(user.id); resetUser();  modalUpdate({ visible: 0, content: null, modalType: 0 }) } }>Delete User</button>
                    :   <button className='gray-bg pullLeft' style={{ cursor: 'not-allowed' }}>Delete User</button>
                }
                <button className='gray-bg pullLeft' style={{ marginLeft: 10 }} onClick={ () => { resetUser();  modalUpdate({ visible: 0, content: null, modalType: 0 }) } }>Cancel</button>
            </>
        )
    }
}

const mapStateToProps = state => {
    const { users, services } = state;
    return {
        user: users.user,
        services: services.services
    }
}
  
export default connect(mapStateToProps, {
    resetUser,
    deleteUser,
    modalUpdate
})(DeleteUser);