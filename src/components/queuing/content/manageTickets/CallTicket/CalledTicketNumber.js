import React from 'react';
import { connect } from 'react-redux'

class CalledTicketNumber extends React.Component {
    render(){
        const { callTickets, activeTicketId, authenticatedAgent } = this.props        
        console.log(callTickets);
        const tickets = callTickets.filter( data => ( data.manage.agentId === authenticatedAgent.id && data.ticket.id === activeTicketId) )
        return  null
        // tickets.length
        // ?   (
        //         <div className="calledTicketNumber">
        //             <div>called</div>
        //             <div>{ tickets.length }</div>
        //         </div>
        //     )
        // : null
    }
}

const mapStateToProps = state => {
    const { agents, tickets } = state
    return {
        callTickets: tickets.callTickets,
        activeTicketId: tickets.activeTicketId,
        authenticatedAgent: agents.authenticatedAgent,
    }
}

export default connect(mapStateToProps, { })(CalledTicketNumber);