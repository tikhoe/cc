import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

// this component is used for exploriing agents and checking their availability. This is not used for transfers.
class AgentsComponent extends React.Component {
    render(){
        const { agents, sessions, counters } = this.props

        var onlineAgents = []
        var offlineAgents = []
        
        agents.forEach(data => {
            var session = sessions.find( session => (session.userId === data.id))
            if(session!=null){
                if( Number(session.status)===1 ){
                    var counter = counters.find(data => data.id === session.counterId)
                    var counterType = counter.type
                    var counterNumber = counter.number != null ? counter.number : ""
                    onlineAgents.push({ ...data, counterId: session.counterId, counterType, counterNumber })
                } else {
                    offlineAgents.push({ ...data, reason: session.reason })
                }
            } else {
                offlineAgents.push({ ...data, reason: "Never signed in" })
            }
        })
        
        return(
            <div className="home-left-content5-wraper">
                <div className="titleBlock">
                    <h4>{onlineAgents.length} Agent { onlineAgents.length !== 1 ? 's' : '' } Online</h4>
                </div>
                <div className="usersListContainer">
                    <div className="user-list-online">
                    {onlineAgents.map((data, index) => {

                        var inititals = data.name
                        .replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g,'')
                        .charAt(0) 
                        + 
                        data.lastName
                        .replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g,'')
                        .charAt(0)
                        
                        return(
                            <div className="user-list" key={index}>
                                <div className="user-name-and-pic">
                                    <div>
                                        <div>
                                            <span className="status-badge"></span>
                                            <span className="user-image-text">{ inititals }</span> 
                                        </div>
                                        <p>{ data.name + " " + data.lastName}</p>
                                    </div>
                                </div>
                                <div className="user-list-content"><p>{ data.counterType + " " + data.counterNumber }</p></div>
                            </div>
                        )
                        })}
                    </div>

                    <div className="user-list-offline">
                    {offlineAgents.map((data, index) => {

                        var inititals = data.name
                        .replace(/[&/\\#,+()$~%.'":*?!<>{}]/g,'')
                        .charAt(0) 
                        + 
                        data.lastName
                        .replace(/[&/\\#,+()$~%.'":*?!<>{}]/g,'')
                        .charAt(0)

                        return(
                            <div className="user-list" key={index}>
                                <div className="user-name-and-pic">
                                    <div>
                                        <div>
                                            <span className="status-badge"></span>
                                            <span className="user-image-text">{ inititals }</span> 
                                        </div>
                                        <p>{ data.name + " " + data.lastName}</p>
                                    </div>
                                </div>
                                <div className="user-list-content"><p>{data.reason}</p></div>
                            </div>
                        )
                        })}
                    </div>

                </div>
                

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        agents: state.agents.agents,
        authenticatedAgent: state.agents.authenticatedAgent,
        sessions: state.sessions.sessions,
        counters: state.counters.counters,
    }
};
  
export default connect(mapStateToProps, {})(AgentsComponent);