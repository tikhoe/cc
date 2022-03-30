import React from 'react';
import { connect } from 'react-redux'

import {
    resetOrganization,
    deleteOrganization
} from "../../../../store/actions/organizationsActions";

import {
    modalUpdate
} from "../../../../store/actions/settingsActions";


class DeleteOrganization extends React.Component {
    constructor(){
        super()
        this.state = {
            shortName: ''
        }
    }
    render(){

        const { organization } = this.props
        const { deleteOrganization, resetOrganization, modalUpdate } = this.props

        return (
            <>  
                <h5>Delete Organization</h5>
                <div className="alertContainer scheme-pinkred-bg">
                    DANGER: Deleting an organization is permanent. Please make sure you are deleting the correct organization.
                </div>
                <div className="informationContainer">
                    <div className="informationRow">
                        <label>Name</label>
                        <span>{ organization.name }</span>
                    </div>
                    <div className="informationRow">
                        <label>Short Name</label>
                        <span>{ organization.shortName }</span>
                    </div>
                </div>

                <div className="input-options">
                    <label><strong>Type the short name of the organization you want to delete.</strong></label>
                    <input type="text"  value={ this.state.shortName } onChange={ (e) => this.setState({ shortName: e.target.value }) } placeholder="Type" />
                </div>

                {
                    this.state.shortName === organization.shortName
                    ?   <button className='pinkred-bg pullLeft' onClick={ () => { deleteOrganization(organization.id);  modalUpdate({ visible: 0, content: null, modalType: 0 }); resetOrganization() } }>Delete Organization</button>
                    :   <button className='gray-bg pullLeft' style={{ cursor: 'not-allowed' }}>Delete Organization</button>
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
    resetOrganization,
    deleteOrganization,
    modalUpdate
})(DeleteOrganization);