import React from 'react';

// components
import Queuing from '../components/Queuing'
import SignOut from '../components/queuing/content/forms/SignOut'

class SignOutComponent extends React.Component {
    render(){
        const content = <div className="col-one">
            <SignOut />
        </div>
        return <Queuing children={content} />
    }
}

export default SignOutComponent

