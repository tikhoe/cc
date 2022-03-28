import React from 'react';
import { connect } from 'react-redux'

class QuickAlerts extends React.Component {
    render(){
        let { authenticatedAgent, tickets, sessions } = this.props
        const session = sessions.find( session => session.userId === authenticatedAgent.id )

        let priorityTickets = tickets.filter( ticket => 
            ticket.manage != null &&
            !(Number(ticket.status))
        )
        .filter( ticket => 
            ticket.manage.agentId === authenticatedAgent.id ||
            ticket.manage.counterId === session.counterId

        )
        
        return priorityTickets.length
            ?   <div className="quickAlerts scheme-pinkred-bg">
                    <p className="count"><strong>{ priorityTickets.length } Ticket{priorityTickets.length>1?"s":""}</strong></p>
                    <p>can only be served by you</p>
                </div>
            :   null
    }
}

const mapStateToProps = state => {
    const { agents, tickets, sessions } = state
    return {
        authenticatedAgent: agents.authenticatedAgent,
        sessions: sessions.sessions,
        activeTicketId: tickets.activeTicketId,
        tickets: tickets.tickets,
    }
}

export default connect(mapStateToProps, {})(QuickAlerts);

