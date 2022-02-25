import React from 'react';

// components
import Queuing from '../components/Queuing.js'
import ReQueueTicket from '../components/queuing/content/forms/ReQueueTicket'

class Components extends React.Component {
    render(){
        return (
            <>
                <Queuing children={<ReQueueTicket />} />
            </>
        )
    }
}

export default Components

