import React from 'react';
import { connect } from 'react-redux'

import {
    modalUpdate,
} from "../../../../store/actions/settingsActions";

import {
    updateActiveManagementTicketId,
} from "../../../../store/actions/ticketsActions";

class MoreTicket extends React.Component {
    handleModalClick(id = null){
        const { modalUpdate, updateActiveManagementTicketId } = this.props
        id = id != null
            ?   id
            :   this.props.ticket.id
            
        updateActiveManagementTicketId(id)
        modalUpdate({ visible: 1, content: "TicketManagement", modalType: 1 })
    }

    render(){
        const { activeTicketId } = this.props
        const content = <>
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="66" fill="none" viewBox="0 0 65 66">
                <circle cx="30.5" cy="17.5" r="14.5" stroke="#626BE7" strokeWidth="4.287"/>
                <path stroke="#626BE7" strokeWidth="4.287" d="M3 60c0-15.464 12.088-28 27-28"/>
                <path fill="#626BE7" d="M50.143 46.955v-11.45c0-.542-.211-1.063-.589-1.447-.377-.384-.89-.6-1.423-.6-.534-.001-1.047.214-1.425.597-.378.384-.59.904-.591 1.447v11.45H34.851c-.535 0-1.048.215-1.426.6-.378.383-.59.905-.59 1.448 0 .543.212 1.065.59 1.449.378.384.891.6 1.426.6h11.264v11.449c0 .543.212 1.064.59 1.448.378.385.891.6 1.426.6.534 0 1.047-.215 1.425-.6.378-.384.59-.905.59-1.448v-11.45h11.265c.534 0 1.047-.215 1.425-.6.378-.383.59-.905.59-1.448 0-.543-.212-1.065-.59-1.449-.378-.384-.89-.6-1.425-.6l-11.268.004z"/>
            </svg>
            <h4>Manage</h4>
        </>

        return <div className="home-left-content2-item item5 call-more" onClick={ () => this.handleModalClick(activeTicketId) }>{ content }</div>
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

export default connect(mapStateToProps, {
    modalUpdate,
    updateActiveManagementTicketId,
})(MoreTicket)