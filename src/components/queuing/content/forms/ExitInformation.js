import React from 'react';
import { NavLink } from 'react-router-dom'

// components

class ExitInformation extends React.Component {
    render(){
        return (
            <div className="home-center-content1">
                <div className="titleBlock icon">
                    <div className="iconWrapper"><ion-icon name="arrow-back-outline"></ion-icon></div>
                    <h4>Exit Information</h4>
                    <h4>Back</h4>
                </div>
                
                <form action="" method="">
                    <div className="select-options">
                        <label>Client request fulfilled?</label>
                        <div className="selectStyling">
                            <select>
                                <option selected="selected" disabled="disabled">Select an option</option>
                                <option>Option number 1</option>
                                <option>Option number 2</option>
                                <option>Option number 3</option>
                                <option>Option number 4</option>
                            </select>
                        </div>
                    </div>
                    <div className="select-options">
                        <label>Value of Service</label>
                        <div className="selectStyling">
                            <select>
                                <option selected="selected" disabled="disabled">Select an option</option>
                                <option>Option number 1</option>
                                <option>Option number 2</option>
                                <option>Option number 3</option>
                                <option>Option number 4</option>
                            </select>
                        </div>
                    </div>
                    <div className="select-options">
                        <label>Capability  of  Response</label>
                        <div className="selectStyling">
                            <select>
                                <option selected="selected" disabled="disabled">Select an option</option>
                                <option>Option number 1</option>
                                <option>Option number 2</option>
                                <option>Option number 3</option>
                                <option>Option number 4</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-options">
                        <label>What Matters Discussion</label>
                        <textarea placeholder="Type here"></textarea>
                    </div>
                    <button type="submit" className="form-submit-btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default ExitInformation