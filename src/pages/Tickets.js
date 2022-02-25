import React from "react";
import { connect } from "react-redux";

// components
import Queuing from "../components/Queuing.js";
import ActiveTicket from "../components/queuing/content/ActiveTicket";
import ManageTickets from "../components/queuing/content/ManageTickets";
import QuickInfo from "../components/queuing/content/QuickInfo"


class Tickets extends React.Component {
  render() {
    return (
      <>
        <Queuing
          children={
            <>
              <div className="col-one pullLeft">
                <ActiveTicket />
                <ManageTickets />
              </div>
              <div className="col-one pullLeft" style={{marginLeft:15}}>
                <QuickInfo />
              </div>
            </>
          }
        />
      </>
    );
  }
}

export default connect(null, {})(Tickets);
