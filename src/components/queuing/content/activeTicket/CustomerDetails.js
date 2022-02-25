import React from 'react';
import { connect } from 'react-redux'

class CustomerDetails extends React.Component {
    render(){
        
        const { tickets, activeTicketId, ticket } = this.props
        const { customers } = this.props

        if( !customers.length ){  return <p>Loading customers</p> }
        if(ticket == null ) { return <p>No tickets available</p> }

        const customer = customers.find( data => data.mobileNumber === ticket.mobileNumber)

        return (<div>
            <div className="informationContainer">
                    <div className="informationRow">
                        <label>Full Name</label>
                            {
                                customer != null
                                    ?   !customer.fullname.length
                                        ?   <span>No Customer details</span>
                                        :   <span>{customer.fullname}</span>
                                    :   <span>Unavailable</span>
                            }
                    </div>
                    <div className="informationRow">
                        <label>Mobile Number</label>
                            {
                                customer != null
                                    ?   !customer.mobileNumber.length
                                        ?   <span>Unavailable</span>
                                        :   <span>{customer.mobileNumber}</span>
                                    :   <span>Unavailable</span>
                            }
                    </div>
                    {
                        customer != null
                        ?   customer.email.length === 0
                                ?   null
                                :   (
                                        <div className="informationRow">
                                            <label>Email</label>
                                            <span>{ customer.email }</span>
                                        </div>
                                    )
                        :   null
                    }
                </div>
        </div>
        )
    }

}

const mapStateToProps = state => {
    const { tickets, customers } = state
    return {
        tickets: tickets.tickets,
        activeTicketId: tickets.activeTicketId,

        customers: customers.customers,
    }
}

    export default connect(mapStateToProps, {})(CustomerDetails);