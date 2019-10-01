import React from 'react';
import {connect} from 'react-redux';


const About = (props) => {
    if(props.user.isSignedIn){
        return (
            <div>
                About ToDo
            </div>
        )
    }
    return (
        <div>
            You Can not access this content, please login by clicking <b>Sign In</b> on the top right 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps)(About);