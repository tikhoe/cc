import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import { unauthenticateAgent } from '../../../../store/actions/agentsActions';
import { createSession, createSessionLog } from '../../../../store/actions/sessionsActions';
// components

class SignOut extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            reason: '',
            description: '',
            error: 0,
        }
        this.signOut = this.signOut.bind(this);
    }

    onChange(e) { this.setState({ [e.target.name]: e.target.value }) }
    signOut(e){
        e.preventDefault();
        const { authenticatedAgent, counterId } = this.props
        const { id } = authenticatedAgent

        const { reason, description } = this.state
        const sessionData = {
            userId: id,
            counterId,
            status: 0,
            reason,
            description
        }
        this.props.createSession(sessionData)
        this.props.createSessionLog(sessionData)
        this.props.unauthenticateAgent({});
    }

    render(){
        return (
            <div className="home-center-content1 home-center-content2">
                <div className="titleBlock icon">
                    <div className="iconWrapper"><ion-icon name="arrow-back-outline"></ion-icon></div>
                    <h4>Sign Out</h4>
                    <h4>Back</h4>
                </div>
                <form onSubmit={this.signOut}>
                    <div className="select-options">
                        <label>Reason for logout</label>
                        <div className="selectStyling">
                            <select name="reason" value={this.state.reason} onChange={(e) => this.onChange(e) }>
                                <option value="0">Select an option</option>
                                <option>Lunch</option>
                                <option>Tea Break</option>
                                <option>Meeting</option>
                                <option>Back Office</option>
                                <option>Smoke Break</option>
                                <option>End of day</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-options">
                        <label>Got more to add?</label>
                        <textarea placeholder="Type here"  name="description" value={this.state.description} onChange={(e) => this.onChange(e) }></textarea>
                    </div>
                    <button type="submit" className="form-submit-btn">Submit</button>
                </form>
            </div>
        )
    }
}

SignOut.propTypes = {
    unauthenticateAgent: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        authenticatedAgent: state.agents.authenticatedAgent,
        counterId: state.counters.counterId 
    }
}

export default connect(mapStateToProps, { unauthenticateAgent, createSession, createSessionLog })(SignOut);