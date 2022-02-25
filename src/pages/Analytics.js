import React from 'react';

// components
import Queuing from '../components/Queuing.js'
import BranchTicketStats from '../components/queuing/content/BranchTicketStats'
import MyTicketStats from '../components/queuing/content/MyTicketStats'


class Analytics extends React.Component {
    render(){
        var content = <div className="col-one" style={{width:500}}>
            <BranchTicketStats />
            <MyTicketStats />
        </div>
        return <Queuing children={content} />
    }
}

export default Analytics

