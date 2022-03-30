import React from "react";
import { connect } from 'react-redux'

import {
    modalUpdate
} from "../../../store/actions/settingsActions";
import {
    listenOrganizations,
    updateOrganizationGetObject,
} from "../../../store/actions/organizationsActions";

class Organizations extends React.Component {
    componentDidMount(){
        const { listenOrganizations } = this.props
        listenOrganizations()
    }

    render() {
        const { organizations } = this.props
        const { modalUpdate, updateOrganizationGetObject } = this.props

        return <>
            <div className="home-left-content">
                <div className="col-two">
                    <div className="home-left-content5-wraper">
                        <div className="titleBlock">
                            <h4>Organizations</h4>
                            <button className="purple-bg pullRight" onClick={ () => modalUpdate({ visible: 1, content: "NewOrganization", modalType: 1 }) }>Add new organization</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Short Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    organizations.length 
                                        ?   organizations.map(data => 
                                                <tr key={data.id}>
                                                     <td>{data.id}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.shortName}</td>
                                                    <td>
                                                        <span style={{cursor:'pointer'}} onClick={ () => { updateOrganizationGetObject(data.id); modalUpdate({ visible: 1, content: "DeleteOrganization", modalType: 1 }) } }>Delete</span> . <span style={{cursor:'pointer'}} onClick={ () => { updateOrganizationGetObject(data.id); modalUpdate({ visible: 1, content: "NewOrganization", modalType: 1 }) } }>Update</span>
                                                    </td>
                                                </tr>
                                            )
                                        :  <tr>
                                                <td colSpan={3}>
                                                    No Organizations available
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
    const { organizations } = state
    return {
        organizations: organizations.organizations,
        organization: organizations.organization,
    }
}
  
export default connect(mapStateToProps, {
    listenOrganizations,
    updateOrganizationGetObject,
    modalUpdate,
})(Organizations);
