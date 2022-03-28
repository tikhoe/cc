import React from "react";

// components
import Sidebar from "./queuing/Sidebar";
import Content from "./queuing/Content";

class Queuing extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Content children={this.props.children} />
      </div>
    );
  }
}

export default Queuing;
