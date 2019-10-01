import React from 'react';
import {Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth';
import {Menu} from 'semantic-ui-react';

class Header extends React.Component {

  render() {
    const {user} = this.props;
    let authLinks = [];

    if(user.isSignedIn && user.isSignedIn === true){
      authLinks.push(
        <Link to="/to-do-list" className="item" key="my_to_do_list">
            My ToDo List
        </Link>
      );
      authLinks.push(    
        <Link to="/about" className="item" key="about">
          About
        </Link>
      );
    }

    return (
      <Menu size="large">
        <Link to="/" className="active item">
          Home
        </Link>
        {authLinks}
        <GoogleAuth user={user}/>
      </Menu>
    );
  }
};

export default Header;