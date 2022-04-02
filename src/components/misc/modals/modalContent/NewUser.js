import React from 'react';
import { connect } from 'react-redux'
import Select from 'react-select'
import Animated from 'react-select/animated';
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import {
    updateUserKeyValue,
    addNewUser,
    updateUser,
    resetUser
} from "../../../../store/actions/usersActions";

import {
    modalUpdate
} from "../../../../store/actions/settingsActions";

import './NewUser.css'

class NewUser extends React.Component {

        
    componentWillUnmount(){
        const { resetUser } = this.props
        resetUser()
    }

    render(){

        const { user, organizations, branches, services } = this.props
        const { addNewUser, updateUser, updateUserKeyValue, resetUser, modalUpdate } = this.props

        return (
            <>  
               <h5>Add New User</h5>

                <div className="select-options">
                    <label>Select Organization</label>
                    <div className="selectStyling">
                        <select value={user.organizationId} onChange={ (e) => updateUserKeyValue( { organizationId: e.target.value }) }>
                            <option value="">Select an Organization</option>
                            {
                                organizations.map( (organization, index) => <option key={index} value={organization.id}>{organization.name}</option> )
                            }
                        </select>
                    </div>
                </div>

                {
                    user.organizationId !== ''
                    ?   (
                        <>
                            <div className="input-options">
                                <label>Enter Name</label>
                                <input type="text" placeholder="Name" value={user.name} onChange={ (e) => updateUserKeyValue( { name: e.target.value }) } />
                            </div>
                            <div className="input-options">
                                <label>Enter Lastname</label>
                                <input type="text" placeholder="Lastname"  value={user.lastname} onChange={ (e) => updateUserKeyValue( { lastname: e.target.value }) } />
                            </div>

                            <div className="input-options">
                                <label>Email address</label>
                                <input type="email" placeholder="Email"  value={user.email} onChange={ (e) => updateUserKeyValue( { email: e.target.value }) } />
                            </div>

                            <div className="input-options">
                                <label>Enter Password</label>
                                <input type="password" placeholder="Password" autoComplete="new-password"  value={user.password} onChange={ (e) => updateUserKeyValue( { password: e.target.value }) } />
                            </div>
                        </>
                    )
                    :   null
                }
                

                
                {
                    user.organizationId !== '' && user.name !== '' && user.lastname !== '' && user.email !== '' && user.password !== ''
                    ?   (
                        <div style={{ padding:"15px 0", display: "flex" }}>
                            <Toggle
                                id='agentStatus'
                                defaultChecked={ Number(user.agentStatus) === 1 ? true : false }
                                onChange={ (e) => updateUserKeyValue( { agentStatus: e.target.checked ? 1 : 0 }) }
                            />
                            <label htmlFor='agentStatus' style={{ padding: "2px 0 0 10px" }}>{ Number(user.agentStatus) ? "Yes, user is a support agent" : "No, user is not a support agent"}</label>
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
                                    <select value={user.branchId} onChange={ (e) => updateUserKeyValue( { branchId: e.target.value }) }>
                                        <option value="">Select a Branch</option>
                                        {
                                            branches.filter(branch => branch.organizationId === user.organizationId).map( (branch, index) => <option key={index} value={branch.id}>{branch.name}</option> )
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="select-options">
                                <label>Services</label>
                                <Select
                                    defaultValue={ services.filter(data => user.services.includes(data.id) ).map(data => { return  {value:data.id, label:data.name} } ) }
                                    isMulti
                                    components={ Animated() }
                                    options={ services.filter(data => data.organizationId === user.organizationId).map(data => { return  {value:data.id, label:data.name} } ) }
                                    onChange={ (e) => updateUserKeyValue({ services: e.map(data => { return data.value} ) }) }
                                />
                            </div>
                        </>
                    )
                    :   null
                }
                {
                    (
                        (user.organizationId !== '' && user.name !== '' && user.lastname !== '' && user.email !== '' && user.password !== '' && Number(user.agentStatus) === 1 && user.branchId !== '' && user.services.length) ||
                        (user.organizationId !== '' && user.name !== '' && user.lastname !== '' && user.email !== '' && user.password !== '' && Number(user.agentStatus) === 0)
                    )
                    ?   user.updateStatus
                        ?   <button className='purple-bg pullLeft' onClick={ () => { updateUser(user); modalUpdate({ visible: 0, content: null, modalType: 0 }) } }>Update User</button>
                        :   <button className='purple-bg pullLeft' onClick={ () => { addNewUser(user); modalUpdate({ visible: 0, content: null, modalType: 0 }) } }>Add User</button>
                    :   <button className='gray-bg pullLeft' style={{ cursor: 'not-allowed' }}>Add User</button>
                }
                <button className='gray-bg pullLeft' style={{ marginLeft: 10 }} onClick={ () => { resetUser(); modalUpdate({ visible: 0, content: null, modalType: 0 }) } }>Cancel</button>
            </>
        )
    }
}

const mapStateToProps = state => {
    const { users, organizations, branches, services } = state;
    return {
        user: users.user,
        organizations: organizations.organizations,
        branches: branches.branches,
        services: services.services,
    }
}
  
export default connect(mapStateToProps, {
    updateUserKeyValue,
    addNewUser,
    updateUser,
    resetUser,
    modalUpdate
})(NewUser);