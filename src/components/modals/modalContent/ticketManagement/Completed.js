import React from 'react';
import { connect } from 'react-redux'
import dayjs from 'dayjs';

import { PubSubKeys, TicketStatuses } from '../../../../store/constants'
import { completeTicket } from '../../../../store/actions/ticketsActions'

class Completed extends React.Component {

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
            <div className="actionButtonContainer">
                <div className="actionButton scheme-green-bg" onClick={ () => this.manageTicket(ticket) }>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.9506 4.30885L23.9082 3.64182L23.2461 3.52417C18.612 2.69796 16.6775 2.10066 12.353 0.159705L12 0L11.647 0.159705C7.32252 2.10066 5.388 2.69796 0.753915 3.52417L0.0917502 3.64182L0.0494273 4.30885C-0.15683 7.56205 0.283006 10.5933 1.35822 13.3184C2.23871 15.5412 3.54176 17.5747 5.1962 19.3079C8.06076 22.3279 11.1021 23.6396 11.6823 23.8717L12.0038 24L12.3252 23.8717C12.9054 23.6396 15.9467 22.3279 18.8113 19.3079C20.4631 17.5741 21.7635 15.5406 22.6418 13.3184C23.717 10.5933 24.1568 7.56205 23.9506 4.30885V4.30885ZM10.4014 15.8076L6.50178 12.0088L7.70182 10.7918L10.2985 13.32L16.1985 6.54846L17.495 7.6632L10.4014 15.8076Z" />
                        </svg>
                    </div>
                    <span>Completed</span>
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

export default connect(mapStateToProps, { completeTicket })(Completed);