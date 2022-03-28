import React from 'react';

class Content extends React.Component {
    render(){
        return (
            <div id="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="one"> 
                            <div className="home-left-content">
                                { this.props.children }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content







