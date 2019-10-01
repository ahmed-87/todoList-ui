import React from 'react';
import {Switch, Route } from "react-router-dom";
import Home from './Home';
import About from './About';


const Body = (props) => {
    return(
        <div>
            <Switch>
                <Route exact path="/" >
                    <Home user={props.user} />
                </Route>
                <Route path="/to-do-list">
                    <Home user={props.user} />
                </Route>
                <Route path="/about" >
                  <About user={props.user}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Body;