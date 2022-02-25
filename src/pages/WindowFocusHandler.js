import React from 'react';
import { connect } from 'react-redux';
import PageVisibility from 'react-page-visibility';

import { saveWindowFocus } from '../store/actions/agentsActions'

class WindowFocusHandler extends React.Component {
    listentoWindow = isVisible => {
      this.props.saveWindowFocus(isVisible)
    }

    render() {
      return (
        <PageVisibility onChange={ this.listentoWindow }></PageVisibility>
      );
    }
}

export default connect(null, { 
  saveWindowFocus
})(WindowFocusHandler);