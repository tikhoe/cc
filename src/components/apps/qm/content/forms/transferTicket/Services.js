import React, { useState } from 'react';
import { connect } from 'react-redux';
import TransferExitInformation from './TransferExitInformation';

function Services(props){

    const [transferInfo, transferTicket] = useState('default')

    const { services, agents, sessions } = props
    let onlineServices = [], offlineServices = []
    let onlineAgents = sessions
        .filter( session => Number(session.status) === 1) 
        .map( session =>  agents
            .find( agent => session.userId === agent.id )
        ).filter(Boolean)

    services.forEach( service => {
        var count = 0
        onlineAgents.forEach( agent => { if( agent.services.includes(service.id) ){ count++ } })
        service.agents = count
        if( count ){ onlineServices.push(service) }
        else { offlineServices.push(service) }
    })


    switch (transferInfo.case){
        case 'exit':
        return (<div className="home-right-content1">
            <div className="titleBlock icon">
                <div className="iconWrapper" onClick={ () => transferTicket({case: 'default' }) }><ion-icon name="arrow-back-outline"></ion-icon></div>
                <h4>Transfer to Service</h4>
                <h4>Back</h4>
            </div>
            <TransferExitInformation transferInfo={transferInfo} returnFunction={transferTicket} />
        </div>)
        default:
        return(
            <div className="home-left-content5-wraper">
                <div className="titleBlock icon">
                    <div className="iconWrapper" onClick={ () => props.returnFunction('default')}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <h4>{ onlineServices.length } Service{ onlineServices.length !== 1 ? 's' : '' } Online</h4>
                    <h4>Back</h4>
                </div>
                <div className="usersListContainer">
                    <div className="user-list-online">
                    {onlineServices.map((data, index) => {
                        var inititals = data.name.split(" ").map( (data, index) => index < 2 ? data.charAt(0) : null )
                        return(
                            <div className="user-list" key={index} onClick={ () => transferTicket({ case: 'exit', type:'service', id: data.id }) }>
                                <div className="user-name-and-pic">
                                    <div>
                                        <div>
                                            <span className="status-badge"></span>
                                            <span className="user-image-text">{ inititals }</span> 
                                        </div>
                                        <p>{ data.name }</p>
                                    </div>
                                </div>
                                <div className="user-list-content"><p>{ data.agents } Agent{ data.agents !== 1 ? 's' : '' }</p></div>
                                <div className="user-list-check"><ion-icon name="checkmark-circle-outline"></ion-icon></div>
                            </div>
                        )
                        })}
                    </div>

                    <div className="user-list-offline">
                    {offlineServices.map((data, index) => {
                        var inititals = data.name.split(" ").map( (data, index) => index < 2 ? data.charAt(0) : null )
                        return(
                            <div className="user-list" key={index}>
                                <div className="user-name-and-pic">
                                    <div>
                                        <div>
                                            <span className="status-badge"></span>
                                            <span className="user-image-text">{ inititals }</span> 
                                        </div>
                                        <p>{ data.name }</p>
                                    </div>
                                </div>
                                <div className="user-list-content"><p>0 Agents online</p></div>
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
    return {
        agents: state.agents.agents,
        authenticatedAgent: state.agents.authenticatedAgent,
        sessions: state.sessions.sessions,
        counters: state.counters.counters,
        services: state.services.services,
    }
}
export default connect(mapStateToProps, {})(Services);