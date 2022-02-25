import React from "react";

// components
import Queuing from "../components/Queuing.js";
import Agents from "../components/queuing/content/forms/transferTicket/Agents";
import CallTicketByNumber from "../components/queuing/content/forms/CallTicketByNumber";
import ExitInformation from "../components/queuing/content/forms/ExitInformation";
import MoreOptions from "../components/queuing/content/forms/MoreOptions";
import ReQueueTicket from "../components/queuing/content/forms/ReQueueTicket";
import SignOut from "../components/queuing/content/forms/SignOut";
import TransferTicket from "../components/queuing/content/forms/TransferTicket";

class Components extends React.Component {
  render() {
    var content = (
      <>
        <Agents />
        <div style={{ marginTop: "20px" }}>
          <CallTicketByNumber />
        </div>
        <div style={{ marginTop: "20px" }}>
          <ExitInformation />
        </div>
        <div style={{ marginTop: "20px" }}>
          <MoreOptions />
        </div>
        <div style={{ marginTop: "20px" }}>
          <ReQueueTicket />
        </div>
        <div style={{ marginTop: "20px" }}>
          <SignOut />
        </div>
        <div style={{ marginTop: "20px" }}>
          <TransferTicket />
        </div>
      </>
    );

    return (
      <>
        <Queuing children={content} />
      </>
    );
  }
}

export default Components;
