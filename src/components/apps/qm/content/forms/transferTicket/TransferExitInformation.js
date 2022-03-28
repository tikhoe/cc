import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'

// components
import TicketDetails from '../../activeTicket/TicketDetails';
import CustomerDetails from '../../activeTicket/CustomerDetails';

import { PubSubKeys, TicketStatuses } from '../../../../../store/constants'
import { transferTicket } from '../../../../../store/actions/ticketsActions'

function transferTicker(history, props, exitInformation){
    const action = 'transferTicket'

    const payload = {
        ...PubSubKeys[action],
        msg: exitInformation
    }

    props.transferTicket(payload)
    return(
        history.push ('/queuing/tickets/')
    )
}

// this component is for saving the transfer information of a ticket
function TransferExitInformation(props) {
    let history = useHistory()
    const [formDetails, updateExitForm] = useState({ reason: 0 })
    
    const { tickets, counters, sessions, activeTicketId, authenticatedAgent } = props
    // get transfer info for the ticket. This is info for where the agent wants the ticket to go.
    const { transferInfo } = props
    // grab a copy of the changes made by the call to track to the current agent
    //  before the ticket is transfered
    const oldTicket = tickets.find( data => data.id === activeTicketId )

    // reset to the original ticket values, remove all changes made by the call
    let ticketReset = { ...oldTicket }
    // reset status code to transfer code
    ticketReset.status = TicketStatuses.transferTicket
    ticketReset.transferStatus = 1
    delete ticketReset.manage
    delete ticketReset.volume
    delete ticketReset.sessionStart
    delete ticketReset.updated
    delete ticketReset.agentId

    // make changes to the ticketReset based on the transfer type
    let manage = {}
    // service
    if( transferInfo.type === 'service')
        ticketReset.serviceId = transferInfo.id
    // agent
    if( transferInfo.type === 'agent') {
        manage.agentId = transferInfo.id
    }

    // counter
    if( transferInfo.type === 'counter'){
        manage.counterId = transferInfo.id
    }

    ticketReset.manage = manage

    const exitInformation = {
        ticket: ticketReset,
        oldTicket,
        transferType: transferInfo.type,
        transferAgent: authenticatedAgent.id,
        formDetails
    }

    const ticket = tickets.find( data => data.id === activeTicketId )
   
    return activeTicketId != null
        ?   <>
                <div className="select-options">
                    <label>Reason for transfer</label>
                    <div className="selectStyling">
                        <select value={formDetails.reason} onChange={ (e) => updateExitForm({ reason: e.target.value })}>
                            <option value={0}>Select an option</option>
                            <option>Another agent is better suited for the ticket</option>
                            <option>Customer selected the wrong service</option>
                            <option>I cannot assist customer</option>
                            <option>Other</option>
                        </select>
                        {/* add textarea when other is selected to find other reason why agents transfer tickets */}
                    </div>
                </div>
                <div className="home-right-content2-bottom">
                    <TicketDetails ticket = {ticket} />
                    <CustomerDetails ticket = {ticket} />
                </div>
                <div className="form-submit-btn" onClick = { () => transferTicker(history, props, exitInformation) }>Yes, transfer ticket</div>
            </>
        :   <h5>Ticket was successfully transfered</h5>


}

const mapStateToProps = state => {
    const { agents, tickets, counters, sessions, services } = state
    return {
        tickets: tickets.tickets,
        activeTicketId: tickets.activeTicketId,
        counters: counters.counters,
        sessions: sessions.sessions,
        services: services.services,
        authenticatedAgent: agents.authenticatedAgent,
    }
}

export default connect(mapStateToProps, { transferTicket })(TransferExitInformation);