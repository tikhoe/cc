import React from 'react';
import { connect } from 'react-redux'
import "../../../assets/css/QuickStats.css"
import "../../../assets/css/TicketsOverview.css"
import CurrentlyBeingServed from "./quickInfo/CurrentlyBeingServed"
import QuickStats from "./quickInfo/QuickStats"
import TicketList from "./quickInfo/TicketList"
import QuickAlerts from "./quickInfo/QuickAlerts"

class QuickInfo extends React.Component {
    render(){
        let { authenticatedAgent, tickets, sessions } = this.props

        return (
            <div className="quickInfo">
                <QuickAlerts />

                <div className="quickStats">
                    <h5>Quick Stats</h5>
                    <QuickStats />
                </div>

                <div className="ticketsOverview">
                    
                    <h5>Tickets Overview</h5>
                    <CurrentlyBeingServed />
                    <TicketList />
                    
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    const { agents, tickets } = state
    return {
        authenticatedAgent: agents.authenticatedAgent,
        activeTicketId: tickets.activeTicketId,
        tickets: tickets.tickets,
    }
}

export default connect(mapStateToProps, {})(QuickInfo);

