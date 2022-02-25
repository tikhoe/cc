import React from 'react';
import dayjs from 'dayjs';
import format  from "format-duration"

class Time extends React.Component {
    constructor(){
        super()
        this.state = {
            now: dayjs().unix(),
            timeNowTimer: null
        }
    }
    
    componentDidMount(){
        this.timerId = setInterval(() => {
            this.setState({now: dayjs().unix()})
        }, 1000)
    }

    componentWillUnmount(){
        if(this.timerId) {
            clearInterval(this.timerId)
        }
    }

    render(){
        const { now } = this.state
        const { created } = this.props

        const seconds = now - created
        return format( seconds * 1000, { leading: true } )
    }
}

export default Time