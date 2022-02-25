import React from 'react';
import { connect } from 'react-redux'
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import { PubSubKeys, TicketStatuses } from '../../../../store/constants'
import { callTicket } from '../../../../store/actions/ticketsActions'

import CalledTicketNumber from './CallTicket/CalledTicketNumber'

// components

class CallTicket extends React.Component {
    manageTicket(ticketData, volume){
        if( ticketData == null ) { return }
        const { authenticatedAgent, counters, sessions } = this.props
        const action = 'callTicket'
        const session = sessions.find( data => data.userId === authenticatedAgent.id)
        const counter = counters.find( data => data.id === session.counterId)

        const ticket = {
            ...ticketData,
            sessionStart: dayjs().unix(),
            volume,
            status: TicketStatuses[action] //status code for action
        }

        ticket.manage = {
            counter,
            agentId: authenticatedAgent.id,
            counterId: counter.id
        }
        
        const payload = {
            ...PubSubKeys[action],
            msg: {
                ticket
            }
        }
        this.props.callTicket(payload)
    }

    render(){

        const { tickets, activeTicketId, authenticatedAgent, sessions } = this.props

        //  first we handle tickets that were already called by my agentId. This could be caused by
        // an agent that logged out or browser closed before the ticket was closed
        let priorityTickets = tickets.filter( data => 
            ( Number(data.status) === 1 && data.manage.agentId === authenticatedAgent.id)
        )


        // we check for priorityTickets
        // we will add this later


        // if there are no open tickets
        if( !priorityTickets.length ){
            // find tickets that are not served yet
            priorityTickets = tickets.filter( data => 
                (   
                    // get tickets that are not called yet AND
                    ( Number(data.status) === 0 
                        && (
                            //  are included in my services
                            //  first make sure it is not allocated to something else
                            (
                                data.manage != null
                                ?   data.manage.agentId == null && data.manage.counterId == null
                                    ?   ( authenticatedAgent.services.includes(data.serviceId) )
                                    : 1 === 2 // used to exit check
                                : ( authenticatedAgent.services.includes(data.serviceId) )
                            )

                            // or were sent to my agentId
                            || ( 
                                data.manage != null 
                                ?   data.manage.agentId != null
                                    ?   data.manage.agentId === authenticatedAgent.id
                                    :   1 === 2 // used to exit check
                                :   1 === 2 // used to exit check
                            )

                            // or were sent to my counter
                            || ( 
                                // get the counterId my agentId is logged in with and compare with ticket counterId
                                data.manage != null 
                                ?   data.manage.counterId != null
                                    ?   ( 
                                            data.manage.counterId === sessions
                                                .find( session => 
                                                    session.userId === authenticatedAgent.id 
                                                ).counterId 
                                        )
                                    :   1 === 2 // used to exit check
                                :   1 === 2 // used to exit check
                            )
                        )
                    )
                       
                )
            )

        }

        const ticket = activeTicketId == null
        ?   priorityTickets[0]
        :   priorityTickets.find( data => data.id === activeTicketId )

        return (
            <div className="home-left-content2-item-full item1">
                <CalledTicketNumber />
                <div className="call" onClick={ () => this.manageTicket(ticket, 1) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" fill="none" viewBox="0 0 61 60">
                        <circle cx="30.5" cy="17.5" r="14.5" stroke="#fff" strokeWidth="4.287"/>
                        <path stroke="#fff" strokeWidth="4.287" d="M58 60c0-15.464-12.312-28-27.5-28S3 44.536 3 60"/>
                    </svg>
                    <h4>Call</h4>
                </div>
                <div className="mute" onClick={ () => this.manageTicket(ticket, 0) }>
                    <ion-icon name="volume-mute-outline"></ion-icon>
                    Silent Call
                </div>
            </div>
        )
    }
}


CallTicket.propTypes = {
    // CallTicket: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    const { agents, tickets, services, counters, sessions} = state
    return {
        tickets: tickets.tickets,
        activeTicketId: tickets.activeTicketId,
        counters: counters.counters,
        sessions: sessions.sessions,
        authenticatedAgent: agents.authenticatedAgent,
    }
}

export default connect(mapStateToProps, { callTicket })(CallTicket);