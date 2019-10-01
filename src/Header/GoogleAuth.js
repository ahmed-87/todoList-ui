import React from 'react';
import {signIn, signOut, updateUser} from '../Redux/Actions/auth';
import {connect} from 'react-redux';
import {Menu, Button, Icon} from 'semantic-ui-react';
class GoogleAuth extends React.Component {

    state = {
        isSignedIn: null
    };
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '708740995594-eiel6sb249huk4302gjn3ihiganvt5j3.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }

    handleSignIn = () => {
        this.auth.signIn();
    }

    handleSignOut = () => {
        this.auth.signOut();
    }
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getBasicProfile());
        }else{
            this.props.signOut();
        }
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    componentDidUpdate(prevProps){
        if(prevProps.profile !== this.props.profile){
            this.props.updateUser(this.props.profile);
        }
    }

    render() {
        let content = [];

        if(this.props.isSignedIn && this.props.isSignedIn === true){
            content.push(
                <Menu.Item key='add'>
                    <Button color="blue" onClick={this.props.openModal}>
                        <Icon name="plus" />
                          Add
                    </Button>
                </Menu.Item >
            );
            content.push(
                <Menu.Item key='user'>
                    <div style={{marginRight : 5}}>
                         welcome {this.props.profile.firstName + " " + this.props.profile.lastName} 
                    </div>
                    <div>
                        <Button color="blue" onClick={this.handleSignOut}>
                            <Icon name="sign out alternate" />
                            Sign Out
                        </Button> 
                    </div>
                </Menu.Item>
            );
        }else if(this.props.isSignedIn === null || this.props.isSignedIn === false){
            content = (
                <Menu.Item key='signin'>
                    <Button color="red" onClick={this.handleSignIn}>
                            <Icon name="sign in alternate" />
                            Sign In
                    </Button> 
                </Menu.Item>
            )
        }

        return (
            <Menu.Menu position="right">
                {content}
            </Menu.Menu>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (userProfile) => dispatch(signIn(userProfile)),
        signOut: () => dispatch(signOut()),
        updateUser: (userDetails) => dispatch(updateUser(userDetails)),
        openModal: (todo) => dispatch({type: "OPEN_MODAL", payload : {}}),
    }
}
const mapStateToProps = (state) => {
    return {
        isSignedIn : state.auth.isSignedIn,
        profile : state.auth.profile,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);