import React from 'react';
import { connect } from 'react-redux'

import NewUser from './modalContent/NewUser'; 
import NewOrganization from './modalContent/NewOrganization'; 
import DeleteOrganization from './modalContent/DeleteOrganization'; 
import NewBranch from './modalContent/NewBranch'; 

import './Modals.css';


import {
    modalUpdate
} from "../../../store/actions/settingsActions";

class Modal1 extends React.Component {

    components = {
        NewUser,
        NewOrganization,
        DeleteOrganization,
        NewBranch
    }
    
    render(){
        const { modalUpdate } = this.props;
        const { modal } = this.props
        const Component = this.components[modal.content]

        const content = modal.visible
            ?   (
                    <div className="modals">
                        <div className="modal1-bg">
                            <div className="modal-close" onClick={ () => modalUpdate({ visible: 0, content: null, modalType: 0 }) } >
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 1L1 21M21 21L1 1L21 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="modal1-content">
                                <Component />
                            </div>
                        </div>
                    </div>
                )
            :   null
                
        return content
    }
}

const mapStateToProps = state => {
    const { settings } = state
    return {
        modal: settings.modal
    }
}
  
export default connect(mapStateToProps, {
    modalUpdate
})(Modal1);