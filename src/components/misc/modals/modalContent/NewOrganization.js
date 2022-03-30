import React from 'react';
import { connect } from 'react-redux'

import {
    addNewOrganization,
    updateOrganization,
    updateOrganizationKeyValue,
    resetOrganization,
} from "../../../../store/actions/organizationsActions";

import {
    modalUpdate
} from "../../../../store/actions/settingsActions";


class NewOrganization extends React.Component {

    render(){

        const { organization } = this.props
        const { updateOrganizationKeyValue, addNewOrganization, updateOrganization, resetOrganization, modalUpdate } = this.props

        return (
            <>  
               <h5>Add New Organization</h5>

                <div className="input-options">
                    <label>Enter Name</label>
                    <input type="text" placeholder="Name" value={organization.name} onChange={ (e) => updateOrganizationKeyValue( { name: e.target.value }) } />
                </div>
                <div className="input-options">
                    <label>Enter Lastname</label>
                    <input type="text" placeholder="Lastname"  value={organization.shortName} onChange={ (e) => updateOrganizationKeyValue( { shortName: e.target.value }) } />
                </div>
                {

                    organization.name !== '' && organization.shortName !== '' 
                    ?   organization.updateStatus
                        ?   <button className='purple-bg pullLeft' onClick={ () => { updateOrganization(organization);  modalUpdate({ visible: 0, content: null, modalType: 0 }) } }>Update Organization</button>
                        :   <button className='purple-bg pullLeft' onClick={ () => { addNewOrganization(organization);  modalUpdate({ visible: 0, content: null, modalType: 0 }) } }>Add Organization</button>
                    :   <button className='gray-bg pullLeft' style={{ cursor: 'not-allowed' }}>Add Organization</button>
                }
                <button className='gray-bg pullLeft' style={{ marginLeft: 10 }} onClick={ () => { resetOrganization();  modalUpdate({ visible: 0, content: null, modalType: 0 }) } }>Cancel</button>
            </>
        )
    }
}

const mapStateToProps = state => {
    const { organizations } = state;
    return {
        organization: organizations.organization
    }
}
  
export default connect(mapStateToProps, {
    updateOrganizationKeyValue,
    updateOrganization,
    addNewOrganization,
    resetOrganization,
    modalUpdate
})(NewOrganization);