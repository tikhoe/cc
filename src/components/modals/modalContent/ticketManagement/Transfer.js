import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import {
    modalUpdate,
} from "../../../../store/actions/settingsActions";

class Transfer extends React.Component {
    render(){
        // modified tickets for priority and sorting
        const { tickets, activeTicketId, authenticatedAgent } = this.props
        const { modalUpdate } = this.props
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

        return (

            <div className="actionButtonContainer">
                <div className="actionButton scheme-orange-bg" onClick={() => modalUpdate({ visible: 1, content: "TransferTicket", modalType: 1 })}>
                    <div>
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.622502 21.9467C0.440783 21.8818 0.28313 21.7598 0.171536 21.5977C0.0599431 21.4356 -2.42086e-05 21.2414 7.33123e-09 21.0422C7.33123e-09 16.6724 0.846926 13.1777 2.51828 10.6544C4.53752 7.60563 7.72272 5.96409 12 5.76025V0.956385C12.0001 0.769097 12.0531 0.585935 12.1527 0.429621C12.2523 0.273307 12.3939 0.15072 12.5601 0.0770668C12.7263 0.00341359 12.9097 -0.0180642 13.0876 0.0152977C13.2654 0.0486595 13.4299 0.135393 13.5606 0.264739L23.7145 10.3077C23.8047 10.397 23.8766 10.5043 23.9256 10.6232C23.9747 10.7421 24 10.87 24 10.9993C24 11.1286 23.9747 11.2565 23.9256 11.3754C23.8766 11.4943 23.8047 11.6016 23.7145 11.6909L13.5606 21.7339C13.4299 21.8632 13.2654 21.9499 13.0876 21.9833C12.9097 22.0167 12.7263 21.9952 12.5601 21.9215C12.3939 21.8479 12.2523 21.7253 12.1527 21.569C12.0531 21.4127 12.0001 21.2295 12 21.0422V16.2736C9.40388 16.3549 7.44233 16.7907 5.8806 17.627C4.19309 18.5309 2.96943 19.8813 1.65058 21.6322C1.53227 21.7892 1.36961 21.904 1.18531 21.9606C1.001 22.0172 0.80425 22.0127 0.622502 21.9479V21.9467Z"/>
                        </svg>
                    </div>
                    <span>Transfer</span>
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => {
    const { agents, tickets, counters, sessions} = state
    return {
        tickets: tickets.tickets,
        activeTicketId: tickets.activeTicketId,
        counters: counters.counters,
        sessions: sessions.sessions,
        authenticatedAgent: agents.authenticatedAgent,
    }
}

export default connect(mapStateToProps, {
    modalUpdate,
})(Transfer);