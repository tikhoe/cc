import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'

import Agents from './transferTicket/Agents'
import Counters from './transferTicket/Counters';
import Services from './transferTicket/Services';

function TransferTicket(props){
    const [transfer, selectTransfer] = useState('default')
    let history = useHistory()

    switch (transfer){
        case 'agents':
        return <Agents returnFunction={selectTransfer} />
        case 'services':
        return <Services returnFunction={selectTransfer} />
        case 'counters':
        return <Counters returnFunction={selectTransfer} />

        default:
        return (
            <div className="home-center-content1 home-center-content3">
                <h5>Transfer Ticket</h5>
                <div className='radioLinks'>
                    <div onClick={ () => selectTransfer('services') }>Transfer to service</div>
                    <div onClick={ () => selectTransfer('agents') }>Transfer to agent</div>
                    <div onClick={ () => selectTransfer('counters') }>Transfer to counter</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tickets: state.tickets.tickets,
    }
}

export default connect(mapStateToProps, {})(TransferTicket);