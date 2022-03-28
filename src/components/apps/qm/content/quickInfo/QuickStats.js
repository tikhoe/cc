import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class CurrentlyBeingServed extends React.Component {

    render(){
        const { tickets, authenticatedAgent, sessions } = this.props

        var now = new Date();
        var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        startOfDay /= 1000;
 
        // find tickets that are not served yet
        const priorityTickets = tickets.filter( data => 
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

        // check agents that are online
        const onlineSessions = sessions.filter( session => Number(session.status) === 1 )


        return (
            <div className="home-left-content3-bottom" style={{paddingBottom:15}}>
                <div className="home-left-content3-bottom-item content3-bottom-item1" style={{paddingBottom: 0}}>
                    <div>
                        <h3>{ tickets.filter(ticket => !ticket.status ).length }</h3>
                        <div className="up-down-wraper1">
                            <span className="up-arrow">
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 2.5L5.5 15M9 5.6L5.5 2L2 5.6H9Z" stroke="#37C13A" strokeWidth="2.4986" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </span>
                            <span className="down-arrow">
                                <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 14.5V2M2 11.4L5.5 15L9 11.4H2Z" stroke="#FDE2DF" strokeWidth="2.4986" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <h5>Total Customers<br />Waiting</h5>
                </div>
                <div className="home-left-content3-bottom-item content3-bottom-item2" style={{borderLeftColor:"#fff", paddingBottom: 0}}>
                    <div>
                        <h3>{ priorityTickets.length }</h3>
                        <div className="up-down-wraper1">
                            <span className="up-arrow">
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 2.5L5.5 15M9 5.6L5.5 2L2 5.6H9Z" stroke="#37C13A" strokeWidth="2.4986" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </span>
                            <span className="down-arrow">
                                <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 14.5V2M2 11.4L5.5 15L9 11.4H2Z" stroke="#FDE2DF" strokeWidth="2.4986" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <h5>My Customers<br />Waiting</h5>
                </div>
                <div className="home-left-content3-bottom-item content3-bottom-item2" style={{paddingBottom: 0}}>
                    <div>
                        <h3>{ tickets.filter( data => data.status === 3 ).length }</h3>
                        <div className="up-down-wraper1">
                            <span className="up-arrow">
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 2.5L5.5 15M9 5.6L5.5 2L2 5.6H9Z" stroke="#37C13A" strokeWidth="2.4986" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </span>
                            <span className="down-arrow">
                                <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 14.5V2M2 11.4L5.5 15L9 11.4H2Z" stroke="#FDE2DF" strokeWidth="2.4986" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <h5>Completed<br />Tickets</h5>
                </div>
                <div className="home-left-content3-bottom-item content3-bottom-item1" style={{paddingBottom: 0}}>
                    <div>
                        <h3>{ onlineSessions.length }</h3>
                        <div className="up-down-wraper1">
                            <span className="up-arrow">
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 2.5L5.5 15M9 5.6L5.5 2L2 5.6H9Z" stroke="#37C13A" strokeWidth="2.4986" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </span>
                            <span className="down-arrow">
                                <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 14.5V2M2 11.4L5.5 15L9 11.4H2Z" stroke="#FDE2DF" strokeWidth="2.4986" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <h5>Total Agents<br />Online</h5>
                </div>
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
  
  export default connect(mapStateToProps, {})(CurrentlyBeingServed);
  


