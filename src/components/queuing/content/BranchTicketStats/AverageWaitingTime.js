import React from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

// components

class AverageWaitingTime extends React.Component {
    constructor(){
        super()
        this.state = {
            now: dayjs().unix(),
            timeNowTimer: null,
            average: 0,
            oldAverage: 0,
            up: 0,
            down: 0
        }
    }
    
    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState({now: dayjs().unix()}, () => {
                this.getAverageWaitingTime()
            })
        }, 1000)
    }

    componentWillUnmount(){
        if(this.timerId) {
            clearInterval(this.timerId)
        }
    }

    getAverageWaitingTime(){
        const { tickets } = this.props
        let { average, oldAverage, now, up, down } = this.state

        const calledTickets = tickets.map( ticket => {
            if( Number(ticket.status) > 0 )
                return Number(ticket.sessionStart) - Number(ticket.created)
            else 
                return now - Number(ticket.created)
        })

        // average of in-service and completed tickets
        const sum = calledTickets.reduce((a, b) => a + b, 0);
        average = Math.round(sum / calledTickets.length) || 0;

        // animations
        if( average !== this.state.average ){
            if( average > this.state.average ){ up = 1 }
            else { down = 1 }            
        }

        this.setState({ average: average, oldAverage: this.state.average, up, down }, () => {
            setTimeout(() => {
                this.setState({ up: 0, down: 0 })
            }, 400);
        })
        
    }

    render(){
        const { average, oldAverage, up, down } = this.state

        let totalSeconds = average
        let totalHours = Math.floor(totalSeconds / ( 60 * 60 ))
        totalSeconds = totalSeconds - ( totalHours * 60 * 60 )

        let totalMinutes = Math.floor( totalSeconds / 60 )
        totalSeconds = totalSeconds - ( totalMinutes * 60 )

        totalHours =  String(totalHours).length === 1 ? '0' + String(totalHours) : totalHours
        totalMinutes =  String(totalMinutes).length === 1 ? '0' + String(totalMinutes) : totalMinutes
        totalSeconds =  String(Math.round(totalSeconds)).length === 1 ? '0' + String(Math.round(totalSeconds)) : Math.round(totalSeconds)
        
        return (
            <div className="home-left-content3-bottom-item content3-bottom-item3">
                <div>
                    <h3>{totalHours + ':' + totalMinutes + ':' + totalSeconds }</h3>
                    <div className="up-down-wraper3">
                        <span className="up-arrow">
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style={{stroke: up ? "#37C13A" : "#EBF9E9" }} d="M5.5 2.5L5.5 15M9 5.6L5.5 2L2 5.6H9Z" strokeWidth="2.4986" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <span className="down-arrow">
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path style={{stroke: down ? "#F03638" : "#FDE2DF" }} d="M5.5 14.5V2M2 11.4L5.5 15L9 11.4H2Z" strokeWidth="2.4986" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <h5>Average Waiting<br />Time</h5>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { tickets, agents, sessions } = state
    return {
        tickets: tickets.tickets,
        authenticatedAgent: agents.authenticatedAgent,
        sessions: sessions.sessions,
    }
}

export default connect(mapStateToProps, {})(AverageWaitingTime);