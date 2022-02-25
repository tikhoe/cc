import React from 'react';

// components
import Queuing from '../components/Queuing.js'
import TransferTicket from '../components/queuing/content/forms/TransferTicket'

class Components extends React.Component {
    render(){
        console.log(this.props);
        return (
            <>
                <Queuing children={<TransferTicket />} />
            </>
        )
    }
}

export default Components

