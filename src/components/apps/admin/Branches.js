import React from "react";
import { connect } from 'react-redux'

import {
    modalUpdate
} from "../../../store/actions/settingsActions";
import {
    fetchBranches,
    addNewBranch
} from "../../../store/actions/branchesActions";

class Branches extends React.Component {
    componentDidMount(){
        const { fetchBranches } = this.props
        fetchBranches()
    }

    addNewUser(id = null){
        const { modalUpdate } = this.props   
        modalUpdate({ visible: 1, content: "NewBranch", modalType: 1 })
    }

    render() {
        const { branches } = this.props
        return <>
            <div className="home-left-content">
                <div className="">
                    <div className="home-left-content5-wraper">
                        <div className="titleBlock">
                            <h4>Branches</h4>
                            <button className="purple-bg pullRight" onClick={ () => this.addNewBranch() }>Add new branch</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>organizationId</th>
                                    <th>townId</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    branches.length 
                                        ?   branches.map(branch => 
                                                <tr key={branch.id}>
                                                    <td>{branch.id}</td>
                                                    <td>{branch.name}</td>
                                                    <td>{branch.organizationId}</td>
                                                    <td>{branch.townId}</td>
                                                    <td>Delete . Update</td>
                                                </tr>
                                            )
                                        :   <tr>
                                                <td colSpan={6}>
                                                    No Branches available
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
    const { branches } = state
    return {
        branches: branches.branches,
        branch: branches.branch,
    }
}
  
export default connect(mapStateToProps, {
    fetchBranches,
    addNewBranch,
    modalUpdate
})(Branches);
