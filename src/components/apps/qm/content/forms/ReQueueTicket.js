import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// components
import TicketDetails from '../activeTicket/TicketDetails';
import CustomerDetails from '../activeTicket/CustomerDetails';
class ReQueueTicket extends React.Component {
    render(){
        return (
            <>
                <div className="select-options">
                    <label>Reason for re-queue</label>
                    <div className="selectStyling">
                        <select>
                            <option selected="selected" disabled="disabled">Select an option</option>
                            <option>Customer is not a priority customer</option>
                            <option>I cannot assist customer</option>
                        </select>
                    </div>
                </div>

                <div className="home-right-content2-bottom">
                    <>
                        <TicketDetails />
                        <CustomerDetails />
                    </>
                </div>
                <div className="form-submit-btn">Yes, re-queue ticket</div>
            </>
        )
    }
}

const mapStateToProps = state => {
    const { agents, tickets, counters, sessions } = state
    return {
        tickets: tickets.tickets,
        activeTicketId: tickets.activeTicketId,
        counters: counters.counters,
        sessions: sessions.sessions,
        authenticatedAgent: agents.authenticatedAgent,
    }
}

export default connect(mapStateToProps, {})(ReQueueTicket)