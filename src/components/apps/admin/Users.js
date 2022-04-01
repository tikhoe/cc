import React from "react";
import { connect } from 'react-redux'

import {
    modalUpdate
} from "../../../store/actions/settingsActions";
import {
    updateUserGetObject
} from "../../../store/actions/usersActions";

class Users extends React.Component {

    render() {
        const { users, organizations } = this.props
        const { updateUserGetObject, modalUpdate } = this.props

        return <>
            <div className="home-left-content">
                <div className="col-two">
                    <div className="home-left-content5-wraper">
                        <div className="titleBlock">
                            <h4>Users</h4>
                            <button className="purple-bg pullRight" onClick={ () => modalUpdate({ visible: 1, content: "NewUser", modalType: 1 }) }>Add new user</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Organization</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length 
                                        ?    users.map( (data, index) => <tr key={index}>
                                                <td>{data.name} {data.lastname}</td>
                                                <td>{data.email}</td>
                                                <td>
                                                    {
                                                        organizations.find( org => org.id === data.organizationId ).name
                                                    }
                                                </td>
                                                <td>
                                                    <span style={{cursor:'pointer'}} onClick={ () => { updateUserGetObject(data.id); modalUpdate({ visible: 1, content: "DeleteUser", modalType: 1 }) } }>Delete</span> . <span style={{cursor:'pointer'}} onClick={ () => { updateUserGetObject(data.id); modalUpdate({ visible: 1, content: "NewUser", modalType: 1 }) } }>Update</span>
                                                </td>
                                            </tr>)
                                    :   <tr>
                                            <td colSpan={4}>
                                                No Users available
                                            </td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    }
}

const mapStateToProps = state => {
    const { users, organizations } = state
    return {
        users: users.users,
        organizations: organizations.organizations
    }
}
  
export default connect(mapStateToProps, {
    updateUserGetObject,
    modalUpdate,
})(Users);
