import React from 'react';
import { NavLink } from 'react-router-dom'

// components

class CallTicketByNumber extends React.Component {
    render(){
        return (
            <div className="home-center-content1 home-center-content4">
                <div className="titleBlock icon">
                    <div className="iconWrapper"><ion-icon name="arrow-back-outline"></ion-icon></div>
                    <h4>Call Ticket By Number</h4>
                    <h4>Back</h4>
                </div>
                <form action="" method="">
                    <div className="select-options">
                        <label>Reason for calling ticket by number</label>
                        <div className="selectStyling">
                            <select value="0" onChange={ () => console.log() }>
                                <option value="0">Select an option</option>
                                <option>Option number 1</option>
                                <option>Option number 2</option>
                                <option>Option number 3</option>
                                <option>Option number 4</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-options">
                        <label>Ticket number?</label>
                        <textarea placeholder="Type ticket number here"></textarea>
                    </div>
                    {/* <div className="form-submit-btn">Submit</div> */}
                </form>
                <div className="formsCallingBtn">Call ticket</div>
                <div className="formsMuteCallingBtn">
                    <ion-icon name="volume-mute-outline" role="img" className="md hydrated" aria-label="volume mute outline"></ion-icon>
                    Silent Call
                </div>
            </div>
        )
    }
}

export default CallTicketByNumber