import React from 'react';
import { connect } from 'react-redux';

class MyTicketStats extends React.Component {
    render(){
        const { tickets, authenticatedAgent, transferTickets } = this.props
        let myTickets = tickets.filter( ticket => 
            (
                ticket.manage != null 
                ?   ticket.manage.agentId != null 
                ?   ( ticket.manage.agentId === authenticatedAgent.id )
                :   1 === 2 // exit check
            :   1 === 2 // exit check
            )
        )
        let myTransferTickets = transferTickets.filter( ticket => 
            ( ticket.transferAgent === authenticatedAgent.id )
        )

        return (
            <div className="home-left-content4-wraper home-left-content3-wraper">
                <div className="home-left-content4 home-left-content3">
                    <div className="titleBlock">
                        <h4>My Ticket Stats</h4>
                    </div>
                    <div className="home-left-content4-top home-left-content3-top">
                        <div className="home-left-content3-items content3-item1 content4-item1">
                            <span>
                                <i className="fas fa-users"></i>
                            </span>
                            <h2>{ myTickets.length }</h2>
                            <h5>Total<br />Tickets</h5>
                        </div>
                        <div className="home-left-content3-items content3-item2 content4-item2">
                            <span>
                                <i className="fas fa-users"></i>
                            </span>
                            <h2>{ myTickets.filter( ticket => ticket.status === 3 ).length }</h2>
                            <h5>Completed<br />Tickets</h5>
                        </div>
                        <div className="home-left-content3-items content3-item3 content4-item3">
                            <span>
                                <i className="fas fa-users"></i>
                            </span>
                            <h2>{ myTickets.filter( ticket => ticket.status === 2 ).length }</h2>
                            <h5>No<br />Show</h5>
                        </div>
                        <div className="home-left-content3-items content3-item4 content4-item4">
                            <span>
                                <i className="fas fa-users"></i>
                            </span>
                            <h2>{ myTransferTickets.length }</h2>
                            <h5>Transfered<br />Tickets</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { tickets, agents, sessions } = state
    return {
        tickets: tickets.tickets,
        transferTickets: tickets.transferTickets,
        authenticatedAgent: agents.authenticatedAgent,
        sessions: sessions.sessions,
    }
}

export default connect(mapStateToProps, {})(MyTicketStats);