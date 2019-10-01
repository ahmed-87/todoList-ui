import React from 'react';
import Header from './Header';
import Body from './Body';
import { BrowserRouter as Router } from "react-router-dom";
import LoadingMask from './LoadingMask';
import {connect} from 'react-redux';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';

class App extends React.Component {

  componentDidUpdate(prevProps) {
    const {toastDetails} = this.props;
    if(prevProps.toastDetails !== toastDetails){
      toast({ 
          size : 'medium',
          time: 5000,
          type: toastDetails.type,
          title: toastDetails.title,
          description : toastDetails.description
        });
      }

  }

  render() {
    const {isLoading, message, isSignedIn, profile} = this.props;
    let user = { isSignedIn, profile }
    return (
      <div>
        <LoadingMask isLoading={isLoading} message={message}/>
        <Router>
          <div id="header">
            <Header user={user} />
          </div>
          <div id="body" >
            <Body user={user}/>
          </div>
          <div id="footer">
            <div className="toast" style={{position: 'absolute', bottom: 0, right: 0, width: 300}}>
              <SemanticToastContainer />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {isLoading, message, toastDetails} = state.util;
  const {isSignedIn, profile} = state.auth;

  return {isLoading, message, toastDetails, isSignedIn, profile};
}

export default connect(mapStateToProps)(App);
