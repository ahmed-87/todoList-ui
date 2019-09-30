import React from 'react';
import Header from './Header';
import Body from './Body';
import { BrowserRouter as Router } from "react-router-dom";
import LoadingMask from './LoadingMask';
import {connect} from 'react-redux';

class App extends React.Component {

  componentDidMount(){

  }

  render() {
    return (
      <div>
      <LoadingMask {...this.props}/>
        <Router>
          <div id="header">
            <Header />
          </div>
          <div id="body">
            <Body />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {isLoading, message} = state.util;
    return {isLoading, message};
}

export default connect(mapStateToProps)(App);
