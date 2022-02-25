import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import TransferExitInformation from './TransferExitInformation';

// this component is used for transfers.
function Counters(props){
    const [transferInfo, transferTicket] = useState('default')
    const { services, agents, sessions, counters } = props
    
    // get online counters from the online sessions
    let onlineCounters = sessions
    .filter( session => session.status === 1) 
    .map( session => 
        counters
            .find( counter => counter.id === session.counterId )
    )
    
    // add all counters to offlineCounters and filter out the onlineCounters
    let offlineCounters = counters
    .map( 
        counter =>  
            onlineCounters 
                .filter( onlineCounter => onlineCounter.id === counter.id ).length ? null : counter 
    ).filter(Boolean)

    switch (transferInfo.case){
        case 'exit':
        return (<div className="home-right-content1">
            <div className="titleBlock icon">
                <div className="iconWrapper" onClick={ () => transferTicket({case: 'default' }) }><ion-icon name="arrow-back-outline"></ion-icon></div>
                <h4>Transfer to Counter</h4>
                <h4>Back</h4>
            </div>
            <TransferExitInformation transferInfo={transferInfo} returnFunction={transferTicket} />
        </div>);

        default:
        return(
            <div className="home-left-content5-wraper">
                <ReactTooltip />
                <div className="titleBlock icon">
                    <div className="iconWrapper" onClick={ () => props.returnFunction('default')}>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <h4>{onlineCounters.length} Counter{ onlineCounters.length !== 1 ? 's' : '' } Online</h4>
                    <h4>Back</h4>
                </div>
                <div className="usersListContainer">
                    <div className="user-list-online">
                    {onlineCounters.map((data, index) => {
                        var inititals = data.number != null
                        ?   String(data.number).length
                            ?   data.number
                            :   data.type.charAt(0)
                        : data.type.charAt(0) 
                        
                        let counterServices = sessions.filter( session => session.counterId === data.id )
                        .map( session =>
                            ( agents.find( agent => agent.id === session.userId ).services )
                        )[0]
                        let toolTipServices = ''
                        counterServices.forEach( serviceIds => {
                            let service = services.find( service => service.id === serviceIds)
                            toolTipServices = toolTipServices + '<p style="padding:0;margin:0">' + service.name + '</p>'
                        })
                        
                        return(
                            <div className="user-list" key={index} onClick={ () => transferTicket({ case: 'exit', type:'counter', id: data.id }) }>
                                <div className="user-name-and-pic">
                                    <div>
                                        <div>
                                            <span className="status-badge"></span>
                                            <span className="user-image-text">{ inititals }</span> 
                                        </div>
                                        <p style={{width:'auto'}}>{ data.type } { data.number != null ? data.number : null }</p>
                                    </div>
                                </div>
                                <div className="user-list-content"><p data-tip={ toolTipServices } data-html={true}>{ counterServices.length } Service{ counterServices.length !== 1 ? 's' : '' } available here</p></div>
                                <div className="user-list-check"><ion-icon name="checkmark-circle-outline"></ion-icon></div>
                            </div>
                        )
                        })}
                    </div>

                    <div className="user-list-offline">
                    {offlineCounters.map((data, index) => {

                        var inititals = data.number != null
                        ? data.number
                        : data.type.charAt(0) 

                        return(
                            <div className="user-list" key={index} onClick={ () => transferTicket({ case: 'exit', type:'counter', id: data.id }) }>
                                <div className="user-name-and-pic">
                                    <div>

                                        <div>
                                            <span className="status-badge"></span>
                                            <span className="user-image-text">{ inititals }</span> 
                                        </div>
                                        <p>{ data.type } { data.number != null ? data.number : null }</p>
                                    </div>
                                </div>
                                <div className="user-list-content"><p>No Agent Present</p></div>
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
export default connect(mapStateToProps, {})(Counters);