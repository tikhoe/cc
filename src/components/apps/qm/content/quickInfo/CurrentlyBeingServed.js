import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class CurrentlyBeingServed extends React.Component {

    render(){
        const { tickets, authenticatedAgent, sessions } = this.props
 
        // find tickets that are not served yet
        const priorityTickets = tickets.filter( data => 
            Number(data.status) === 1
        )


        return (
            <div className="currentlyBeingServed group">
                <div className="counter pullLeft">{ priorityTickets.length }</div>
                <div className="indicators pullLeft">
                    <svg width="60" height="46" viewBox="0 0 60 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46 40.5385V4M36 31.4769L46 42L56 31.4769H36Z" stroke="#FDE2DF" strokeWidth="7.31519" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 5.46154L14 42M24 14.5231L14 4L4 14.5231L24 14.5231Z" stroke="#37C13A" strokeWidth="7.31519" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="title pullLeft">Currently Being<br />Serviced</div>
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
  
  export default connect(mapStateToProps, {})(CurrentlyBeingServed);
  


