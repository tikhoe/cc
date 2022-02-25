import React from 'react';

// components
import AgentsComponent from '../components/queuing/content/AgentsComponent'
import Queuing from '../components/Queuing'

class Agents extends React.Component {
    render(){
        const content = <div className="col-one">
            <AgentsComponent />
        </div>
        
        return <Queuing children={content} />

    }
}

export default Agents