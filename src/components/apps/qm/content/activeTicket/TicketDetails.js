import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Time from '../Time'
class TicketDetails extends React.Component {
    render(){
        const { ticket } = this.props
        const { services } = this.props

        if( !services.length ){  return <p>Loading services</p> }
        if(ticket == null ) { return <p>No tickets available</p> }
        
        var service = services.find( data => data.id === ticket.serviceId )
        var serviceName = service != null
            ?   service.name 
            :   null

        return (<div>
                <div className="informationContainer">
                    <div className="informationRow">
                        <label>Ticket Number</label>
                        <span>{ticket.ticketLetter}{ticket.ticketNumber}</span>
                    </div>
                    <div className="informationRow">
                        <label>Service</label>
                        <span>{serviceName}</span>
                    </div>
                    <div className="informationRow">
                        <label>Total Wait Time</label>
                        <span><Time created = { ticket.created } /></span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { tickets, services, agents } = state
    return {
        tickets: tickets.tickets,
        activeTicketId: tickets.activeTicketId,
        authenticatedAgent: agents.authenticatedAgent,
        services: services.services,
    }
}

export default connect(mapStateToProps, {})(TicketDetails);