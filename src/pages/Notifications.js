import React from 'react';
import { connect } from 'react-redux';

// components
// import addNotification from 'react-push-notification';

class Notifications extends React.Component {

    // componentDidUpdate(prevProps, _prevState, _snapshot) {
    //     const { windowFocusStatus, ticketsCount, services, latestTicket } = this.props
        
    //     // new ticket
    //     // console.log("new ticket added", this.props.latestTicket);
    //     // if( prevProps.latestTicket == null && this.props.latestTicket != null ){
    //     //     console.log(prevProps.ticketsCount, ticketsCount, this.state.ticketsCount);
    //     //     // this.pushNotification()
    //     // }

    //     // new counter

    //     // new agent

    // }

    // pushNotification(){
    //     console.log("XXXXXXX called", Math.random());
    //     const { windowFocusStatus, ticketsCount, services, latestTicket } = this.props
    //     const service = services.find( service => service.id === latestTicket.serviceId)
    //     addNotification({
    //         title: 'New Ticket',
    //         subtitle: 'This is a subtitle',
    //         message: 'A new customer customer available. Ticket: ' + latestTicket.ticketLetter + "" + latestTicket.ticketNumber + ". Service: " + service.name,
    //         theme: 'darkblue',
    //         native: true
    //     });
    // };  


    

    render(){
        return null
    }
}

const mapStateToProps = state => {
    const { agents, tickets, services } = state
    return {
        windowFocusStatus: agents.windowFocusStatus,
        ticketsCount: tickets.ticketsCount,
        latestTicket: tickets.latestTicket,
        services: services.services,
    }
  }
  
export default connect(mapStateToProps, { })(Notifications);


