import React from 'react';

// components
import Queuing from '../components/Queuing.js'
import MoreOptions from '../components/queuing/content/forms/MoreOptions'

class MorePage extends React.Component {
    render(){
        return (
            <>
                <Queuing children={<MoreOptions />} />
            </>
        )
    }
}

export default MorePage

