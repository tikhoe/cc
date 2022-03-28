import React from 'react';
import { connect } from 'react-redux'
import dayjs from 'dayjs';

import { PubSubKeys, TicketStatuses } from '../../../../store/constants'
import { noShowTicket } from '../../../../store/actions/ticketsActions'

class NoShowTicket extends React.Component {
    manageTicket(ticketData){
        const { activeTicketId, authenticatedAgent, sessions, counters } = this.props
        if( ticketData == null || activeTicketId == null ) { return }
        const action = 'noShowTicket'
        const sessionInSeconds = dayjs().unix()
        const ticket = {
            ...ticketData,
            sessionEnd: sessionInSeconds,
            sessionInSeconds: sessionInSeconds - Number(ticketData.sessionStart),
            status: TicketStatuses[action] //status code for action
        }

        const payload = {
            ...PubSubKeys[action],
            msg: {
                ticket
            }
        }
        this.props.noShowTicket(payload)
    }

    render(){
        const { tickets, activeTicketId, authenticatedAgent } = this.props

        const ticket = tickets.find( data => data.id === activeTicketId )

        return (
            <div className="home-left-content2-item item3 call-no-show" onClick={() => this.manageTicket(ticket)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60">
                    <circle cx="30.5" cy="17.5" r="14.5" stroke="#EB6477" strokeWidth="4.287"/>
                    <path stroke="#EB6477" strokeWidth="4.287" d="M3 59c0-14.912 12.088-27 27-27"/>
                    <path fill="#EB6477" d="M51.369 48.5l8.03-8.03c.382-.381.596-.897.597-1.436 0-.538-.213-1.055-.594-1.436-.38-.381-.897-.596-1.435-.596-.539 0-1.055.213-1.436.593l-8.031 8.03-8.03-8.03c-.382-.38-.899-.595-1.438-.595-.539 0-1.056.214-1.437.595-.38.381-.595.898-.595 1.437 0 .54.214 1.056.595 1.437l8.03 8.031-8.03 8.03c-.38.382-.595.899-.595 1.438 0 .539.214 1.056.595 1.437.381.38.898.595 1.437.595.54 0 1.056-.214 1.437-.595l8.031-8.03 8.03 8.03c.382.38.899.595 1.438.595.539 0 1.056-.214 1.437-.595.38-.381.595-.898.595-1.437 0-.54-.214-1.056-.595-1.437L51.369 48.5z"/>
                </svg>

                <h4>No Show</h4>
            </div>
        )
    }
}

NoShowTicket.propTypes = {
    // noShowTicket: PropTypes.func.isRequired,
};

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

export default connect(mapStateToProps, { noShowTicket })(NoShowTicket)