import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

// components
import AudioRecording from './activeTicket/AudioRecording';
import Time from './Time';
import TicketDetails from './activeTicket/TicketDetails';
import CustomerDetails from './activeTicket/CustomerDetails';


import {
    modalUpdate,
} from "../../../store/actions/settingsActions";

import {
    updateActiveManagementTicketId,
} from "../../../store/actions/ticketsActions";

class ActiveTicket extends React.Component {
    handleModalClick(id = null){
        const { modalUpdate, updateActiveManagementTicketId } = this.props
        id = id != null
            ?   id
            :   this.props.ticket.id
            
        updateActiveManagementTicketId(id)
        modalUpdate({ visible: 1, content: "TicketManagement", modalType: 1 })
    }

    render(){
        let { authenticatedAgent, activeTicketId, tickets, sessions } = this.props
        console.log(activeTicketId);
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
            <div className="home-time-counter-top-wraper">
                {
                    priorityTickets.length
                        ?   <>
                                <div className="home-time-counter-top">
                                    <div className="titleBlock">
                                        <h4>{ this.props.activeTicketId == null ? 'Next' : 'Current' } Ticket</h4>
                                        <div className="home-time-counter-with-btn">
                                            <div className="manageBtn" onClick={ () => this.handleModalClick(ticket.id) }>Manage</div>
                                            <div className="home-left-counter">
                                                <h3>
                                                    {
                                                        activeTicketId != null
                                                            ?   <Time created = { ticket.sessionStart } />
                                                            :   null
                                                    } 
                                                </h3>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                <div className="home-time-counter-main">
                                    <>
                                        <TicketDetails ticket={ ticket } />
                                        <CustomerDetails ticket={ ticket } />
                                    </>
                                </div>
                                <AudioRecording />
                            </>
                        : <div className="emptyQueue">
                            <div>Queue is empty</div>
                            <div>There are currently no customers in your queue</div>
                            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 2L14.067 17.938L8.3445 12.2326M7.78469 18L2 12.2326M21.6555 2L13.756 11.0543" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
                            </svg>
                        </div>
                }
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
  
  export default connect(mapStateToProps, {
    modalUpdate,
    updateActiveManagementTicketId,
  })(ActiveTicket);
  


