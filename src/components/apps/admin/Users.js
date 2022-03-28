import React from "react";
import { connect } from 'react-redux'

import {
    modalUpdate
} from "../../../store/actions/settingsActions";
import {
    fetchUsers,
    addNewUser
} from "../../../store/actions/usersActions";

class Users extends React.Component {
    componentDidMount(){
        const { fetchUsers, addNewUser } = this.props
        fetchUsers()
    }

    addNewUser(id = null){
        const { modalUpdate } = this.props            
        // updateActiveManagementTicketId(id)
        modalUpdate({ visible: 1, content: "NewUser", modalType: 1 })
    }

    render() {

        return <>
            <div className="home-left-content">
                <div className="col-two">
                    <div className="home-left-content5-wraper">
                        <div className="titleBlock">
                            <h4>Users</h4>
                            <button className="purple-bg pullRight" onClick={ () => this.addNewUser() }>Add new user</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tikhoe Uirab</td>
                                    <td>tikhoe@averly.com.na</td>
                                    <td>Admin</td>
                                    <td>Delete . Update</td>
                                </tr>
                                <tr>
                                    <td>Tikhoe Uirab</td>
                                    <td>tikhoe@averly.com.na</td>
                                    <td>Admin</td>
                                    <td>Delete . Update</td>
                                </tr>
                                <tr>
                                    <td>Tikhoe Uirab</td>
                                    <td>tikhoe@averly.com.na</td>
                                    <td>Admin</td>
                                    <td>Delete . Update</td>
                                </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    }
}

const mapStateToProps = state => {

    return {
    }
}
  
export default connect(mapStateToProps, {
    fetchUsers,
    addNewUser,
    modalUpdate,
})(Users);
