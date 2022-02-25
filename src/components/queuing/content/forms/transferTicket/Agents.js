import React, { useState } from 'react';
import { connect } from 'react-redux';
import TransferExitInformation from './TransferExitInformation';

// this component is used for transfers.
function Agents(props){
    const [transferInfo, transferTicket] = useState('default')
    const { agents, sessions, counters, authenticatedAgent } = props

    var onlineAgents = []
    var offlineAgents = []
    
    agents.forEach(data => {
        var session = sessions.find( session => (session.userId === data.id))
        if(session!=null && data.id !== authenticatedAgent.id){
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
    
    switch (transferInfo.case){
        case 'exit':
        return (<div className="home-right-content1">
            <div className="titleBlock icon">
                <div className="iconWrapper" onClick={ () => transferTicket({case: 'default' }) }><ion-icon name="arrow-back-outline"></ion-icon></div>
                <h5>Transfer to Agent</h5>
                <h4>Back</h4>
            </div>
            <TransferExitInformation transferInfo={transferInfo} returnFunction={transferTicket} />
        </div>);

        default:
        return(
            <div className="home-left-content5-wraper">
                <div className="titleBlock icon">
                    <div className="iconWrapper" onClick={ () => props.returnFunction('default')}><ion-icon name="arrow-back-outline"></ion-icon></div>
                    <h5>{onlineAgents.length} Other Agent{ onlineAgents.length !== 1 ? 's' : '' } Online</h5>
                    <h5>Back</h5>
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
                            <div className="user-list" key={index} onClick={ () => transferTicket({ case: 'exit', type:'agent', id: data.id }) }>
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
                                <div className="user-list-check"><ion-icon name="checkmark-circle-outline"></ion-icon></div>
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
                            <div className="user-list" key={index} onClick={ () => transferTicket({ case: 'exit', type:'agent', id: data.id }) }>
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
                                <div className="user-list-check"><ion-icon name="checkmark-circle-outline"></ion-icon></div>
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
    const { agents, sessions, counters } = state
    return {
        agents: agents.agents,
        authenticatedAgent: agents.authenticatedAgent,
        sessions: sessions.sessions,
        counters: counters.counters,
    }
}
export default connect(mapStateToProps, {})(Agents);