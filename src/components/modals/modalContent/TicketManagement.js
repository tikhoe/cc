import React from 'react';
import { connect } from 'react-redux'

import './TicketManagement.css'

import Time from '../../queuing/content/Time'
import Call from './ticketManagement/Call';
import Completed from './ticketManagement/Completed';
import NoShow from './ticketManagement/NoShow';
import Transfer from './ticketManagement/Transfer';

class TicketManagement extends React.Component {

    render(){
        const { activeTicketId, activeManagementTicketId, tickets, customers, services, agents, sessions, counters, authenticatedAgent } = this.props

        // my active ticket
        const myActiveTicket = tickets.find( data => data.id === activeTicketId )
        // Ticket details
        const ticket = tickets.find( ticket => ticket.id === activeManagementTicketId )

        // customer details
        const customer = customers.find( data => data.mobileNumber === ticket.mobileNumber)

        // service details
        var service = services.find( data => data.id === ticket.serviceId )
        var serviceName = service != null
            ?   service.name 
            :   null
        
        // agent details only active tickets
        const agent = ticket.status
            ?   agents.find( agent => agent.id === ticket.manage.agentId )
            :   ticket.manage != null
                ?   ticket.manage.agentId != null
                    ?   agents.find( agent => agent.id === ticket.manage.agentId )
                    :   null
                :   null

        

        // agent session details only active tickets
        const session = agent != null
            ?   sessions.find( session => session.userId === agent.id )
            :   null

        // agent counter details only active tickets
        const counter = ticket.status
        ?   counters.find( counter => counter.id === ticket.manage.counterId )
        :   ticket.manage != null
            ?   ticket.manage.counterId != null
                ?   counters.find( counter => counter.id === ticket.manage.counterId )
                :   null
            :   null


        // is this an active ticket ?
        const isActiveTicket = Number(ticket.status) === 1
            ?   1
            :   0
        
        // is it my active ticket ?
        const isMyActiveTicket = activeTicketId === activeManagementTicketId
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


        // kill code if ticket is closed
        if( ticket.status > 1 ){
            return (
                <>  
                    <h5>Ticket Management</h5>
                    <div className="informationContainer">
                        <div className="informationRow">
                            <label>Ticket Number</label>
                            <span>{ ticket.ticketLetter }{ ticket.ticketNumber }</span>
                        </div>
                        <div className="informationRow">
                            <label>Service</label>
                            <span>{ serviceName }</span>
                        </div>
                    </div>
                    <h5>Ticket was Closed</h5>
               </>
            )
        }
        
        // display banner for inactive tickets that are not in our service, unless transfered to my agentId or counterId.
        const callStatus = (
            isMyActiveTicket || 
            ( !isActiveTicket && !isTransfered && isMyService ) ||
            ( !isActiveTicket && isTransfered && (isTransferedToMyCounterId || isTransferedToMyAgentId) )    
        )
            console.log(agent);
        return (
            <>  
               <h5>Ticket Management</h5>

               {
                    // alert to show that the user is already on a call and cannot call another ticket
                    callStatus && 
                    ( 
                        (activeTicketId != null && !isActiveTicket )  
                    ) 
                        ?   <div className="alertContainer scheme-pinkred-bg">You are already on a call with <span>Ticket { myActiveTicket.ticketLetter + "-" + myActiveTicket.ticketNumber }</span>. You cannot call another ticket at this time.</div>
                        :   null
                }
                {
                    isTransfered && !isTransferedToMyCounterId && !isTransferedToMyAgentId
                        ?   <div className="alertContainer scheme-pinkred-bg">
                                Ticket can only be managed by
                                {
                                    isTransferedToCounter
                                        ?   <> Counter: <span>"{ counter.type }"</span></>
                                        :   ""
                                }
                                {
                                    isTransferedToAgent
                                        ?   <> the Agent: <span>"{ agent.name } { agent.lastName }"</span></>
                                        :   ""
                                }

                            </div>
                        :   null
                }

                <div className="informationContainer">
                    <div className="informationRow">
                        <label>Ticket Number</label>
                        <span>{ ticket.ticketLetter }{ ticket.ticketNumber }</span>
                    </div>
                    <div className="informationRow">
                        <label>Service</label>
                        <span>{ serviceName }</span>
                    </div>
                    {
                        isActiveTicket
                            ?   <div className="informationRow">
                                    <label>Service Time</label>
                                    <span><Time created = { ticket.sessionStart } /></span>
                                </div>
                            :   null
                    }
                    <div className="informationRow">
                        <label>Total Wait Time</label>
                        <span><Time created = { ticket.created } /></span>
                    </div>
                </div>

                <div className="informationContainer">
                    <div className="informationRow">
                        <label>Full Name</label>
                            {
                                customer != null
                                    ?   !customer.fullname.length
                                        ?   <span>No Customer details</span>
                                        :   <span>{customer.fullname}</span>
                                    :   <span>Unavailable</span>
                            }
                    </div>
                    <div className="informationRow">
                        <label>Mobile Number</label>
                            {
                                customer != null
                                    ?   !customer.mobileNumber.length
                                        ?   <span>Unavailable</span>
                                        :   <span>{customer.mobileNumber}</span>
                                    :   <span>Unavailable</span>
                            }
                    </div>
                    {
                        customer != null
                        ?   customer.email.length === 0
                                ?   null
                                :   (
                                        <div className="informationRow">
                                            <label>Email</label>
                                            <span>{ customer.email }</span>
                                        </div>
                                    )
                        :   null
                    }
                </div>

                {
                    // Agent details for active tickets
                    isActiveTicket
                        ?   (
                                <div className="informationContainer">
                                    <div className="informationRow">
                                        <label>Agent</label>
                                        <span>
                                            { agent.name } { agent.lastName } 
                                            {
                                                ticket.manage.agentId === authenticatedAgent.id
                                                    ?   <span className="pill scheme-green-bg">You</span>
                                                    :   null
                                            }
                                        </span>
                                    </div>
                                    <div className="informationRow">
                                        <label>Counter</label>
                                        <span>{ counter.type }</span>
                                    </div>
                                </div>
                            )
                        :   null
                }
                
                

                <div className="ticketActions group">
                    {
                        callStatus && 
                        ( 
                            // make sure you cannot call inactive ticket while there is already an active one
                            activeTicketId == null || 
                            (activeTicketId != null && isActiveTicket )  
                        )                  
                            ?   <Call />
                            :   null
                    } 
                    {
                        isMyActiveTicket
                            ?   <Completed />
                            :   null
                    }
                    {
                        isMyActiveTicket
                            ?   <Transfer />
                            :   null
                    }
                    {
                        isMyActiveTicket
                            ?   <NoShow />
                            :   null
                    }
                    {
                        isMyActiveTicket
                            ?   (
                                    <div className="actionButtonContainer">
                                        <div className="actionButton scheme-gray-bg">
                                            <div>
                                                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.66667 19.8627C6.66699 20.4438 6.51325 21.0148 6.2209 21.5182C5.92854 22.0216 5.50788 22.4397 5.00121 22.7305C4.49453 23.0213 3.9197 23.1745 3.33449 23.1747C2.74929 23.1749 2.17435 23.0221 1.66747 22.7317C1.16059 22.4413 0.739638 22.0234 0.446932 21.5202C0.154226 21.017 8.303e-05 20.4461 1.52603e-06 19.865C-7.99779e-05 19.2839 0.153902 18.713 0.446467 18.2097C0.739032 17.7064 1.15987 17.2884 1.66667 16.9979V6.17681C1.03119 5.81247 0.534542 5.25009 0.253736 4.57688C-0.0270696 3.90367 -0.0763347 3.15726 0.113582 2.45341C0.303498 1.74957 0.721982 1.12762 1.30413 0.684029C1.88628 0.240439 2.59955 0 3.33333 0C4.06711 0 4.78039 0.240439 5.36254 0.684029C5.94469 1.12762 6.36317 1.74957 6.55309 2.45341C6.743 3.15726 6.69374 3.90367 6.41293 4.57688C6.13213 5.25009 5.63547 5.81247 5 6.17681V16.9979C5.50646 17.2882 5.92708 17.7058 6.21962 18.2087C6.51217 18.7115 6.66634 19.282 6.66667 19.8627ZM3.33333 21.5178C3.66297 21.5178 3.9852 21.4207 4.25928 21.2388C4.53337 21.057 4.74699 20.7985 4.87313 20.4961C4.99928 20.1936 5.03229 19.8609 4.96798 19.5398C4.90367 19.2188 4.74493 18.9239 4.51185 18.6924C4.27876 18.4609 3.98179 18.3033 3.65848 18.2394C3.33518 18.1756 3.00007 18.2083 2.69553 18.3336C2.39099 18.4589 2.13069 18.671 1.94755 18.9432C1.76442 19.2154 1.66667 19.5354 1.66667 19.8627C1.66667 20.3017 1.84226 20.7226 2.15482 21.033C2.46738 21.3434 2.89131 21.5178 3.33333 21.5178ZM3.33333 1.65691C3.0037 1.65691 2.68147 1.75398 2.40738 1.93584C2.1333 2.11771 1.91968 2.37619 1.79353 2.67862C1.66739 2.98104 1.63438 3.31382 1.69869 3.63487C1.763 3.95592 1.92174 4.25083 2.15482 4.4823C2.38791 4.71376 2.68488 4.87139 3.00818 4.93526C3.33149 4.99912 3.6666 4.96634 3.97114 4.84107C4.27568 4.7158 4.53598 4.50367 4.71912 4.23149C4.90225 3.95932 5 3.63933 5 3.31199C5 2.87303 4.82441 2.45206 4.51185 2.14167C4.19928 1.83129 3.77536 1.65691 3.33333 1.65691ZM18.3333 6.17681V16.7594C18.332 18.021 17.8267 19.2305 16.9284 20.1226C16.0301 21.0146 14.8121 21.5164 13.5417 21.5178H12.5V23.1728C12.4999 23.3365 12.451 23.4964 12.3594 23.6324C12.2679 23.7684 12.1377 23.8744 11.9855 23.937C11.8333 23.9996 11.6658 24.016 11.5042 23.9841C11.3426 23.9522 11.1941 23.8735 11.0776 23.7578L7.74427 20.4477C7.58811 20.2925 7.50039 20.0821 7.50039 19.8627C7.50039 19.6433 7.58811 19.4329 7.74427 19.2777L11.0776 15.9676C11.1941 15.8519 11.3426 15.7732 11.5042 15.7413C11.6658 15.7094 11.8333 15.7258 11.9855 15.7884C12.1377 15.851 12.2679 15.957 12.3594 16.093C12.451 16.229 12.4999 16.3889 12.5 16.5526V18.2076H13.5417C13.9284 18.2076 14.2994 18.0551 14.5729 17.7835C14.8464 17.5119 15 17.1435 15 16.7594V6.17681C14.3645 5.81247 13.8679 5.25009 13.5871 4.57688C13.3063 3.90367 13.257 3.15726 13.4469 2.45341C13.6368 1.74957 14.0553 1.12762 14.6375 0.684029C15.2196 0.240439 15.9329 0 16.6667 0C17.4004 0 18.1137 0.240439 18.6959 0.684029C19.278 1.12762 19.6965 1.74957 19.8864 2.45341C20.0763 3.15726 20.0271 3.90367 19.7463 4.57688C19.4655 5.25009 18.9688 5.81247 18.3333 6.17681ZM16.6667 1.65691C16.337 1.65691 16.0148 1.75398 15.7407 1.93584C15.4666 2.11771 15.253 2.37619 15.1269 2.67862C15.0007 2.98104 14.9677 3.31382 15.032 3.63487C15.0963 3.95592 15.2551 4.25083 15.4882 4.4823C15.7212 4.71376 16.0182 4.87139 16.3415 4.93526C16.6648 4.99912 16.9999 4.96634 17.3045 4.84107C17.609 4.7158 17.8693 4.50367 18.0525 4.23149C18.2356 3.95932 18.3333 3.63933 18.3333 3.31199C18.3333 2.87303 18.1577 2.45206 17.8452 2.14167C17.5326 1.83129 17.1087 1.65691 16.6667 1.65691Z" />
                                                </svg>
                                            </div>
                                            <span>Re-Queue</span>
                                        </div>
                                    </div>
                                )
                            :   null
                    }
                    <div className="actionButtonContainer">
                        <div className="actionButton scheme-gray-bg">
                            <div>
                                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.35806 9.17375L1.97236 9.54651L2.33766 8.87157C3.1612 7.49238 5.68153 4.27425 11.2589 4.27425C16.9745 4.27425 19.4099 7.76921 20.2101 8.91929L20.6156 9.55049L21.8889 8.74732L21.4645 8.08332C21.0232 7.44466 20.0967 6.11865 18.4437 4.9472C16.4353 3.51979 14.0173 2.79565 11.2589 2.79565C4.89377 2.79565 1.98031 6.52868 1.02059 8.12606L0.654297 8.74732L1.21939 9.08827C1.24509 9.10836 1.27216 9.12662 1.30041 9.14294C1.31907 9.15421 1.33832 9.16449 1.35806 9.17375V9.17375Z" />
                                    <path d="M17.3832 7.7692C15.6168 6.33136 13.5006 5.56995 11.2591 5.56995C6.41225 5.56995 3.19213 8.8502 2.14742 12.1041C1.19069 15.109 2.35368 19.4633 2.40239 19.6497L2.62008 20.336L4.10762 20.0165L3.87204 19.271C3.8616 19.2337 2.77365 15.1493 3.60316 12.5509C4.05047 11.1553 4.98136 9.79749 6.15529 8.83379C7.57177 7.67328 9.33813 7.05749 11.2591 7.05749C15.761 7.05749 18.3131 10.5669 19.0347 12.4306C19.5949 13.8685 19.4657 15.5031 18.7226 16.5061C18.4478 16.8734 17.9632 17.3048 17.2256 17.2675C15.5453 17.182 15.2545 16.3515 14.8504 14.7701C14.6566 14.0086 14.4578 13.2204 13.9623 12.5832C13.3589 11.8004 12.4812 11.4222 11.2645 11.4222C9.95591 11.4222 8.96488 11.8536 8.3133 12.7005C6.89186 14.5534 7.81629 17.7168 7.85556 17.85L7.86649 17.8923C7.93657 18.0841 9.65969 22.6958 14.2744 23.8404L15.0085 24L15.4106 22.5731L14.6516 22.4026C10.9628 21.4866 9.42262 17.7113 9.30433 17.4131C9.17101 16.9292 9.0861 16.4333 9.05086 15.9326C8.99718 15.2139 9.03496 14.2233 9.51954 13.5897C9.8749 13.1264 10.446 12.9028 11.2591 12.9028C12.7396 12.9028 12.9877 13.6269 13.3753 15.1289C13.7521 16.5931 14.2699 18.6005 17.1446 18.7446C18.2485 18.7978 19.245 18.3078 19.9448 17.3704C20.9949 15.9649 21.1942 13.8133 20.4512 11.8964C19.8707 10.3874 18.751 8.88747 17.3832 7.7692V7.7692Z" />
                                    <path d="M6.1983 16.2626C6.02584 14.857 6.26838 12.7338 7.51785 11.3531C8.38463 10.3944 9.64455 9.91182 11.2549 9.91182C13.1181 9.91182 14.5286 10.7428 15.4551 12.3775C15.911 13.1977 16.2123 14.0948 16.3437 15.024L16.4148 15.7541L17.9058 15.6448C17.9072 15.3855 17.8906 15.1265 17.8561 14.8695C17.8506 14.8059 17.6787 13.2562 16.8124 11.7011C15.6166 9.55845 13.6996 8.42428 11.2588 8.42428C9.19625 8.42428 7.55364 9.07934 6.38517 10.3681C4.8022 12.1146 4.47915 14.6548 4.69982 16.449V16.4654C5.09594 19.1755 6.13965 21.343 7.98603 23.2813L8.56256 23.839L9.60379 22.756L9.08989 22.2694C7.46368 20.5657 6.54272 18.6592 6.1983 16.2626V16.2626ZM5.1193 2.81605C5.66998 2.48206 7.61775 1.48556 11.2588 1.48556C15.6096 1.48556 17.543 2.91296 17.5644 2.9234L18.2552 3.36375L19.0618 2.11079L18.4048 1.68535C18.379 1.66647 18.3521 1.64758 18.3253 1.62969C17.6951 1.21966 15.4605 0 11.2588 0C6.89958 0 4.66105 1.31608 4.13124 1.67541L3.45581 2.11328L4.26096 3.36623L5.1193 2.81605Z" />
                                    <path d="M17.9482 19.841C16.2896 20.0274 14.9437 19.7083 13.9368 18.9041C12.2351 17.5408 12.0144 15.1711 12.0089 15.1269L11.9478 14.3873L10.4304 14.4982L10.4955 15.2437C10.5065 15.3659 10.754 18.263 12.9617 20.0418C14.0606 20.9309 15.4338 21.3782 17.0491 21.3782C17.4072 21.3775 17.765 21.3561 18.1206 21.3141L18.9452 21.2102L18.642 19.7336L17.9482 19.841Z" />
                                </svg>
                            </div>
                            <span>History</span>
                        </div>
                    </div>

                </div>

            </>
        )
    }
}

const mapStateToProps = state => {
    const { tickets, agents, sessions, customers, services, counters } = state
    return {
        tickets: tickets.tickets,
        activeTicketId: tickets.activeTicketId,
        activeManagementTicketId: tickets.activeManagementTicketId,
        sessions: sessions.sessions,
        counters: counters.counters,
        authenticatedAgent: agents.authenticatedAgent,
        agents: agents.agents,
        customers: customers.customers,
        services: services.services,

    }
}
  
export default connect(mapStateToProps, {})(TicketManagement);