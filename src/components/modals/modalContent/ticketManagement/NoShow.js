import React from 'react';
import { connect } from 'react-redux'
import dayjs from 'dayjs';

import { PubSubKeys, TicketStatuses } from '../../../../store/constants'
import { noShowTicket } from '../../../../store/actions/ticketsActions'

class NoShow extends React.Component {
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
        const { tickets, activeTicketId } = this.props

        const ticket = tickets.find( data => data.id === activeTicketId )

        return (
            <div className="actionButtonContainer">
                <div className="actionButton scheme-pinkred-bg"  onClick={ () => this.manageTicket(ticket) }>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.38327 0 0 5.38327 0 12C0 18.6167 5.38327 24 12 24C18.6167 24 24 18.6167 24 12C24 5.38327 18.6167 0 12 0ZM12 18.4563C11.7718 18.4563 11.5487 18.3887 11.359 18.2619C11.1692 18.1351 11.0213 17.9549 10.934 17.7441C10.8467 17.5332 10.8238 17.3012 10.8683 17.0774C10.9128 16.8536 11.0227 16.648 11.1841 16.4866C11.3455 16.3252 11.5511 16.2153 11.7749 16.1708C11.9987 16.1263 12.2307 16.1492 12.4416 16.2365C12.6524 16.3238 12.8326 16.4717 12.9594 16.6615C13.0862 16.8512 13.1538 17.0743 13.1538 17.3025C13.1538 17.6085 13.0323 17.902 12.8159 18.1184C12.5995 18.3348 12.306 18.4563 12 18.4563ZM13.2531 6.85154L12.9219 13.89C12.9219 14.1348 12.8247 14.3696 12.6516 14.5427C12.4784 14.7158 12.2437 14.8131 11.9988 14.8131C11.754 14.8131 11.5192 14.7158 11.3461 14.5427C11.173 14.3696 11.0758 14.1348 11.0758 13.89L10.7446 6.855V6.85212C10.7374 6.68304 10.7644 6.51423 10.8241 6.35588C10.8838 6.19752 10.9749 6.05289 11.092 5.93068C11.2091 5.80847 11.3497 5.71122 11.5053 5.64478C11.661 5.57835 11.8285 5.5441 11.9977 5.5441C12.1669 5.5441 12.3344 5.57835 12.4901 5.64478C12.6457 5.71122 12.7863 5.80847 12.9034 5.93068C13.0205 6.05289 13.1116 6.19752 13.1713 6.35588C13.231 6.51423 13.258 6.68304 13.2508 6.85212L13.2531 6.85154Z" fill="#FFE7EA"/>
                        </svg>
                    </div>
                    <span>No Show</span>
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

export default connect(mapStateToProps, {  })(NoShow)