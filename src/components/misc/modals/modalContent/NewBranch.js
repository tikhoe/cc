import React from 'react';
import { connect } from 'react-redux'

import {
    updateBranch,
    addNewBranch,
    resetBranch
} from "../../../../store/actions/branchesActions";

import {
    modalUpdate
} from "../../../../store/actions/settingsActions";


class NewBranch extends React.Component {
    
        
    componentWillUnmount(){
        const { resetBranch } = this.props
        resetBranch()
    }

    closeForm(){
        console.log('closeForm');
        const { resetBranch, modalUpdate } = this.props
        resetBranch()
        modalUpdate({ visible: 0, content: null, modalType: 0 })
    }

    render(){

        const { branch } = this.props
        const { updateBranch } = this.props

        return (
            <>  
               <h5>Add New Branch</h5>
                
                <div className="select-options">
                    <label>Select Organization</label>
                    <div className="selectStyling">
                        <select value={branch.organizationId} onChange={ (e) => updateBranch( { organizationId: e.target.value }) }>
                            <option value="">Select an Organization</option>
                            <option>Option number 1</option>
                            <option>Option number 2</option>
                            <option>Option number 3</option>
                            <option>Option number 4</option>
                        </select>
                    </div>
                </div>
                
                <div className="input-options">
                    <label>Enter Branch Name</label>
                    <input type="text" placeholder="Name" value={ branch.name } onChange={ (e) => updateBranch( { name: e.target.value }) } />
                </div>
                <div className="input-options">
                    <label>description</label>
                    <input type="text" placeholder="Lastname"  value={ branch.description } onChange={ (e) => updateBranch( { description: e.target.value }) } />
                </div>

                <div className="select-options">
                    <label>Select Town</label>
                    <div className="selectStyling">
                        <select value={ branch.townId } onChange={ (e) => updateBranch( { townId: e.target.value }) }>
                            <option value="">Select Town</option>
                            <option>Option number 1</option>
                            <option>Option number 2</option>
                            <option>Option number 3</option>
                            <option>Option number 4</option>
                        </select>
                    </div>
                </div>
                <div className="select-options">
                    <label>Select Region</label>
                    <div className="selectStyling">
                        <select value={ branch.regionId } onChange={ (e) => updateBranch( { regionId: e.target.value }) }>
                            <option value="">Select Region</option>
                            <option>Option number 1</option>
                            <option>Option number 2</option>
                            <option>Option number 3</option>
                            <option>Option number 4</option>
                        </select>
                    </div>
                </div>
                <div className="select-options">
                    <label>Select Country</label>
                    <div className="selectStyling">
                        <select value={ branch.countryId } onChange={ (e) => updateBranch( { countryId: e.target.value }) }>
                            <option value="">Select Country</option>
                            <option>Option number 1</option>
                            <option>Option number 2</option>
                            <option>Option number 3</option>
                            <option>Option number 4</option>
                        </select>
                    </div>
                </div>

                {
                    branch.name !== '' && branch.shortName !== '' 
                    ?   <button className='purple-bg pullLeft' onClick={ () => this.props.addNewBranch(branch) }>Add Branch</button>
                    :   <button className='gray-bg pullLeft' style={{ cursor: 'not-allowed' }}>Add Branch</button>
                }
                <button className='gray-bg pullLeft' style={{ marginLeft: 10 }} onClick={ () => this.closeForm(branch) }>Cancel</button>
            </>
        )
    }
}

const mapStateToProps = state => {
    const { branches } = state;
    return {
        branch: branches.branch
    }
}
  
export default connect(mapStateToProps, {
    updateBranch,
    addNewBranch,
    resetBranch,
    modalUpdate
})(NewBranch);