import React from 'react';
import { connect } from 'react-redux'

import CallTicket from './manageTickets/CallTicket';
import CompleteTicket from './manageTickets/CompleteTicket';
import NoShowTicket from './manageTickets/NoShowTicket';
import TransferTicket from './manageTickets/TransferTicket';
import MoreTicket from './manageTickets/MoreTicket';

import chillOut from '../../../assets/img/chillOut.svg';
import panda from '../../../assets/img/panda.svg';

class ManageTickets extends React.Component {
    render(){
        let { authenticatedAgent, tickets, sessions } = this.props
    
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


        let bgStyle = !priorityTickets.length ? {background:'#fff'} : {}
        return (
            <div className="calling-group-wraper" style={bgStyle}>
            {
                priorityTickets.length
                    ?   (
                            <>
                                <div className="titleBlock group">
                                    <h4>Manage Tickets</h4>
                                </div>
                                <div className="calling-group">
                                    <>
                                    <CallTicket />
                                    <div className="home-left-content2-item-wraper">
                                        <CompleteTicket />
                                        <NoShowTicket />
                                        <TransferTicket />
                                        <MoreTicket />
                                    </div>
                                    </>
                                </div>
                            </>
                        )
                    :   ( 
                        <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', padding: '28px 0 23px'}}>
                            <img src={chillOut} alt="relax" />
                            <img style={{marginTop:'20px'}} src={panda} alt="Panda with laptop" />
                        </div>
                    )
            
            }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { agents, tickets, sessions } = state
    return {
        authenticatedAgent: agents.authenticatedAgent,
        activeTicketId: tickets.activeTicketId,
        tickets: tickets.tickets,
        sessions: sessions.sessions
    }
}

export default connect(mapStateToProps, {})(ManageTickets);

