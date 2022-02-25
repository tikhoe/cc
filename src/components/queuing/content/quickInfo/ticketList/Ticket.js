import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Time from '../../Time'

import {
    modalUpdate,
} from "../../../../../store/actions/settingsActions";

import {
    updateActiveManagementTicketId,
} from "../../../../../store/actions/ticketsActions";

class Ticket extends React.Component {

    handleModalClick(id = null){
        const { modalUpdate, updateActiveManagementTicketId } = this.props
        id = id != null
            ?   id
            :   this.props.ticket.id
            
        updateActiveManagementTicketId(id)
        modalUpdate({ visible: 1, content: "TicketManagement", modalType: 1 })
    }

    render(){
        const { authenticatedAgent, activeTicketId, sessions, services, agents, customers, counters } = this.props
        const { ticket, key, active } = this.props

        if( !services.length || !sessions.length || !agents.length || !customers.length || !counters.length ) return null

        const userListClass = active
            ?   "user-list active"
            :   "user-list"

        
        // service details
        var service = services.find( data => data.id === ticket.serviceId )
        var serviceName = service != null
            ?   service.name 
            :   null
        
        // agent details only active tickets
        const agent = ticket.manage != null
            ?   agents.find( agent => agent.id === ticket.manage.agentId )
            :   null

        // agent session details only active tickets
        const session = agent != null
            ?   sessions.find( session => session.userId === agent.id )
            :   null

        // agent counter details only active tickets
        const counter = session != null
            ?   counters.find( counter => counter.id === session.counterId )
            :   null

        // is this an active ticket ?
        const isActiveTicket = Number(ticket.status) === 1
            ?   1
            :   0
        
        // is it my active ticket ?
        const isMyActiveTicket = activeTicketId === ticket.id
            ?   1
            :   0

        // is it my service ?
        // const isMyService = ticket.serviceId === authenticatedAgent.serviceId
        const isMyService = authenticatedAgent.services.includes( ticket.serviceId )

        // transfered to a specific counter / agent
        const isTransferedInit = !isActiveTicket && ticket.manage != null
        const isTransfered = isTransferedInit
            ?   ticket.manage.counterId != null || ticket.manage.agentId != null
            :   0

        const mySession = sessions.find( session => session.userId === authenticatedAgent.id )

        // Transfered: is it my counter ?
        const isTransferedToCounter = isTransfered
            ?   ticket.manage.counterId != null
                ?   1
                :   0
            :   0 

        const isTransferedToMyCounterId = isTransferedToCounter
            ?   ticket.manage.counterId === mySession.counterId
                ?   1
                :   0
            :   0
        

        // Transfered: is it my agentId ?
        const isTransferedToAgent = isTransfered && !isTransferedToCounter
            ?   1
            :   0

        const isTransferedToMyAgentId = isTransferedToAgent
            ?   ticket.manage.agentId === authenticatedAgent.id
                ?   1
                :   0
            :   0


        let ticketTag = ''
        if(isMyActiveTicket){
            ticketTag = <div className="ticketTag scheme-green-bg"></div>
        } 

        if(!isActiveTicket && !isTransfered && isMyService){
            ticketTag = <div className="ticketTag scheme-blue-bg"></div>
        }

        if( !isActiveTicket && isTransfered && (isTransferedToMyCounterId || isTransferedToMyAgentId) ){
            ticketTag = <div className="ticketTag scheme-pinkred-bg"></div>
        }


        return (

            <div className={userListClass} key={key} onClick={ () => this.handleModalClick() }>
                {   ticketTag }
                <div className="user-name-and-pic">
                    <div>
                        <div>
                            <span className="status-badge"></span>
                            <span className="user-image-text">{ ticket.ticketLetter + "-" + ticket.ticketNumber }</span> 
                        </div>
                        <p>{ services.find( service => service.id === ticket.serviceId ).name }</p>
                    </div>
                </div>
                <div className="user-list-content">
                    <p>
                        {
                            active
                                ?   "Agent: " + agent.name + " " + agent.lastName
                                :   ticket.mobileNumber == null
                                    ?   "No customer data"
                                    :   customers.find( customer => customer.mobileNumber === ticket.mobileNumber ).fullName
                        }
                    </p>
                </div>
                <div className="user-list-content" style={{ width:"auto", float: "right" }}>
                    <p style={{width:"auto"}}>
                        <Time created = { active ? ticket.sessionStart : ticket.created } />
                    </p>
                </div>
            </div>

        )
    }
                      
}

const mapStateToProps = state => {
    const { tickets, agents, sessions, services, customers, counters } = state
    return {
        tickets: tickets.tickets,
        activeTicketId: tickets.activeTicketId,
        activeManagementTicketId: tickets.activeManagementTicketId,
        sessions: sessions.sessions,
        authenticatedAgent: agents.authenticatedAgent,
        agents: agents.agents,
        customers: customers.customers,
        services: services.services,
        counters: counters.counters,

    }
}
  
export default connect(mapStateToProps, {
    modalUpdate,
    updateActiveManagementTicketId,
})(Ticket);
  
  


