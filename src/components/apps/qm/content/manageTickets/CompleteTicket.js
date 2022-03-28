import React from 'react';
import { connect } from 'react-redux'
import dayjs from 'dayjs';

import { PubSubKeys, TicketStatuses } from '../../../../store/constants'
import { completeTicket } from '../../../../store/actions/ticketsActions'

class CompleteTicket extends React.Component {

    manageTicket(ticketData){
        const { activeTicketId, authenticatedAgent, sessions, counters } = this.props

        if( ticketData == null || activeTicketId == null ) { console.log("can't use action"); return }
        const action = 'completeTicket'
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
        this.props.completeTicket(payload)
    }

    render(){
        const { tickets, activeTicketId } = this.props

        const ticket = tickets.find( data => data.id === activeTicketId )

        return (
            <div className="home-left-content2-item item2 call-completed" onClick={() => this.manageTicket(ticket)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="63" fill="none" viewBox="0 0 60 63">
                    <circle cx="30.5" cy="17.5" r="14.5" stroke="#1BB79F" strokeWidth="4.287"/>
                    <path stroke="#1BB79F" strokeWidth="4.287" d="M3 60c0-15.464 12.088-28 27-28"/>
                    <path stroke="#1BB79F" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="3.131" d="M57 42L40.9 60 34 53.25"/>
                </svg>

                <h4>Completed</h4>
            </div>
        )
    }
}

CompleteTicket.propTypes = {
    // CompleteTicket: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { completeTicket })(CompleteTicket);