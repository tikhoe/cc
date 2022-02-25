import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import {
    modalUpdate,
} from "../../../../store/actions/settingsActions";

class TransferTicket extends React.Component {
    render(){
        const { tickets, activeTicketId, authenticatedAgent } = this.props
        const { modalUpdate } = this.props

        // modified tickets for priority and sorting
        const priorityTickets = tickets
        .filter( data => {
            return (
                ( Number(data.status) === 0 )
                || (data.status === 1 && data.agentId === authenticatedAgent.id)
            )
        })

        const ticket = priorityTickets.find( data => data.id === activeTicketId )

        const content = <>
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" fill="none" viewBox="0 0 61 60">
                <circle cx="30.5" cy="17.5" r="14.5" stroke="#F39264" strokeWidth="4.287"/>
                <path stroke="#F39264" strokeWidth="4.287" d="M3 59c0-14.912 12.088-27 27-27"/>
                <path stroke="#F39264" strokeLinejoin="round" strokeWidth="2.679" d="M39.839 37.306h10.113V32L59 41.02l-9.048 9.02v-5.305H35.58v-5.306L26 48.449 35.58 58v-6.367h10.114"/>
            </svg>
            <h4>Transfer</h4>
        </>

        return activeTicketId != null 
        ?   <div className="home-left-content2-item item4 call-transfer" onClick={() => modalUpdate({ visible: 1, content: "TransferTicket", modalType: 1 })}>{ content }</div>
        :   <div className="home-left-content2-item item4 call-transfer">{ content }</div>

    }
}

const mapStateToProps = state => {
    const { tickets, agents, sessions, services, customers, counters } = state
    return {
        tickets: tickets.tickets,
        activeTicketId: tickets.activeTicketId,
        activeManagementTicketId: tickets.activeManagementTicketId,
        sessions: sessions.sessions,
        authenticatedAgent: agents.authenticatedAgent,
        agents: agents.agents,
        customers: customers.customers,
        services: services.services,
        counters: counters.counters,
    }
}
  
export default connect(mapStateToProps, {
    modalUpdate,
})(TransferTicket);