import React from 'react';
import { connect } from 'react-redux'
import dayjs from 'dayjs';

import { PubSubKeys, TicketStatuses } from '../../../../store/constants'
import { callTicket } from '../../../../store/actions/ticketsActions'

class Call extends React.Component {
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
            <div className="actionButtonContainer">
                <div className="actionButton scheme-purple-bg"  onClick={ () => this.manageTicket(ticket, 1) }>
                    <div>
                        <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.1869 6.82134C11.5579 6.82134 10.9429 6.63481 10.4199 6.28532C9.89686 5.93583 9.48919 5.43909 9.24846 4.85791C9.00773 4.27673 8.94474 3.63722 9.06746 3.02024C9.19019 2.40327 9.49311 1.83654 9.93793 1.39172C10.3827 0.946907 10.9495 0.643984 11.5664 0.52126C12.1834 0.398536 12.8229 0.461522 13.4041 0.702254C13.9853 0.942986 14.482 1.35065 14.8315 1.8737C15.181 2.39675 15.3675 3.01168 15.3675 3.64075C15.3666 4.48402 15.0313 5.29249 14.435 5.88877C13.8387 6.48505 13.0302 6.82044 12.1869 6.82134V6.82134Z" />
                            <path d="M22.183 6.86683L22.1575 6.87364L22.1336 6.88103C22.0768 6.89693 22.02 6.91397 21.9632 6.93158C20.9063 7.24169 15.7764 8.68772 12.1624 8.68772C8.80407 8.68772 4.13825 7.4382 2.64564 7.01393C2.49709 6.95649 2.34538 6.90757 2.19126 6.8674C1.11213 6.58341 0.373779 7.67959 0.373779 8.68147C0.373779 9.67371 1.26548 10.1463 2.16571 10.4853V10.5012L7.57386 12.1904C8.12649 12.4022 8.27416 12.6186 8.34629 12.806C8.58086 13.4075 8.39343 14.5985 8.32698 15.0143L7.99756 17.5701L6.16929 27.5771C6.16361 27.6043 6.15849 27.6322 6.15395 27.6606L6.14089 27.7327C6.00912 28.65 6.68273 29.54 7.95837 29.54C9.07158 29.54 9.56287 28.7715 9.77586 27.7259C9.98885 26.6803 11.3662 18.7765 12.1613 18.7765C12.9565 18.7765 14.5945 27.7259 14.5945 27.7259C14.8075 28.7715 15.2987 29.54 16.412 29.54C17.691 29.54 18.3646 28.646 18.2294 27.7259C18.2178 27.6485 18.2034 27.5716 18.1863 27.4953L16.333 17.5712L16.0042 15.0154C15.7662 13.5268 15.9576 13.0349 16.0223 12.9196C16.0241 12.9169 16.0256 12.9141 16.0269 12.9111C16.0882 12.7975 16.3676 12.5431 17.0197 12.2983L22.0905 10.5257C22.1216 10.5174 22.1523 10.5075 22.1825 10.4961C23.0912 10.1553 24 9.68393 24 8.68261C24 7.68129 23.2622 6.58342 22.183 6.86683Z"/>
                        </svg>
                    </div>
                    <span>Call</span>
                </div>
            </div>
        )
    }
}

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

export default connect(mapStateToProps, { callTicket })(Call);