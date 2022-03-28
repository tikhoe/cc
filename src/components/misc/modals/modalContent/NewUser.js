import React from 'react';
import { connect } from 'react-redux'

import {
    updateUser,
    addNewUser
} from "../../../../store/actions/usersActions";

import './NewUser.css'

class NewUser extends React.Component {

    render(){

        const { user } = this.props
        const { updateUser } = this.props
        console.log(user);

        return (
            <>  
               <h5>Add New User</h5>

               <div className="select-options">
                    <label>Select Organization</label>
                    <div className="selectStyling">
                        <select value={user.organizationId} onChange={ (e) => updateUser( { organizationId: e.target.value }) }>
                            <option value="">Select an Organization</option>
                            <option>Option number 1</option>
                            <option>Option number 2</option>
                            <option>Option number 3</option>
                            <option>Option number 4</option>
                        </select>
                    </div>
                </div>

                {
                    user.organizationId !== ''
                    ?   (
                        <>
                            <div className="input-options">
                                <label>Enter Name</label>
                                <input type="text" placeholder="Name" value={user.name} onChange={ (e) => updateUser( { name: e.target.value }) } />
                            </div>
                            <div className="input-options">
                                <label>Enter Lastname</label>
                                <input type="text" placeholder="Lastname"  value={user.lastname} onChange={ (e) => updateUser( { lastname: e.target.value }) } />
                            </div>

                            <div className="input-options">
                                <label>Email address</label>
                                <input type="email" placeholder="Email"  value={user.email} onChange={ (e) => updateUser( { email: e.target.value }) } />
                            </div>

                            <div className="input-options">
                                <label>Enter Password</label>
                                <input type="password" placeholder="Password" autoComplete="new-password"  value={user.password} onChange={ (e) => updateUser( { password: e.target.value }) } />
                            </div>
                        </>
                    )
                    :   null
                }
                

                
                {
                    user.organizationId !== '' && user.name !== '' && user.lastname !== '' && user.email !== '' && user.password !== ''
                    ?   (
                        <div className="select-options">
                            <label>Is this user a support agent?</label>
                            <div className="selectStyling">
                                <select value={user.agentStatus} onChange={ (e) => updateUser( { agentStatus: e.target.value }) }>
                                    <option value={-1}>Select the agent status of this user</option>
                                    <option value={1}>Yes, user is a support agent</option>
                                    <option value={2}>No</option>
                                </select>
                            </div>
                        </div>
                    )
                    :   null
                }
                
                {
                    user.organizationId !== '' && user.name !== '' && user.lastname !== '' && user.email !== '' && user.password !== '' && Number(user.agentStatus) === 1
                    ?   (
                        <>
                            <div className="select-options">
                                <label>Select Branch</label>
                                <div className="selectStyling">
                                    <select value={user.branchId} onChange={ (e) => updateUser( { branchId: e.target.value }) }>
                                        <option value="">Select a Branch</option>
                                        <option>Option number 1</option>
                                        <option>Option number 2</option>
                                        <option>Option number 3</option>
                                        <option>Option number 4</option>
                                    </select>
                                </div>
                            </div>

                            <div className="select-options">
                                <label>Services</label>
                                <div className="selectStyling">
                                    <select multiple value={user.services} onChange={ (e) => updateUser( { services: e.target.value }) }>
                                        <option value="0">Select services</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    )
                    :   null
                }
                <button className='purple-bg' onClick={ () => this.props.addNewUser(user) }>Add User</button>
            </>
        )
    }
}

const mapStateToProps = state => {
    const { users } = state;
    return {
        user: users.user
    }
}
  
export default connect(mapStateToProps, {
    updateUser,
    addNewUser,
})(NewUser);