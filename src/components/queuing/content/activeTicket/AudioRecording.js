import React from 'react';
import { NavLink } from 'react-router-dom'
class AudioRecording extends React.Component {


    render(){
        return (<><div className="home-time-counter-bottom">

                <div style={{cursor:"pointer"}} >
                    <ion-icon name="stop"></ion-icon>
                </div>
                Recording in progress


                <h3>00:00:34</h3>

            </div>
            </>
        )
    }
}

export default AudioRecording