import React from 'react';
import { connect } from 'react-redux'

import Ticket from './ticketList/Ticket';

class TicketList extends React.Component {

    render(){
        const { tickets, authenticatedAgent, sessions } = this.props

        // const componentTickets = [...new Set(tickets.map(ticket => ticket.id))]
 
        // find tickets are currently being served
        const activeTickets = tickets.filter( data => 
            Number(data.status) === 1
        )
        const waitingTickets = tickets.filter( data => 
            Number(data.status) === 0
        )


        return (
            <div className="usersListContainer">
                <div className="user-list-online">
                    { activeTickets.map( (ticket, index) => <Ticket ticket={ticket} key={index} active={1} /> ) }
                </div>
                {
                    waitingTickets.length > 0 
                        ?   (
                                <div className="user-list-offline">
                                    { waitingTickets.map( (ticket, index) => <Ticket ticket={ticket} key={index} active={0}  /> ) }
                                </div>
                            )
                        :   null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { tickets, agents, sessions } = state
    return {
        tickets: tickets.tickets,
        sessions: sessions.sessions,
        activeTicketId: tickets.activeTicketId,
        authenticatedAgent: agents.authenticatedAgent
    }
  }
  
  export default connect(mapStateToProps, {})(TicketList);
  


