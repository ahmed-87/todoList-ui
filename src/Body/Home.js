import React from 'react';
import ToDoList from './ToDo';

const Home = (props) => {
    const {user} = props;

    if(user.isSignedIn){
        return (
            <div>
                <ToDoList userId={user.profile.userId}/>
            </div>
        )
    }
    return (
        <div>
            You can not access your todo list, please login by clicking <b>Sign In</b> on the top right.
        </div>
    )
}

export default Home;