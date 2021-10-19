import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import {useHistory} from 'react-router-dom';
import useAuth from '../../customHook/useAuth';
import './navBar.css';

const NavBar = () => {

    const history = useHistory();
    const [userInfoDisplay, setUserInfoDisplay] = useState('none');

    const showUserInfoBox = () => {      
       if(userInfoDisplay === 'none') {
            setUserInfoDisplay('block');
       }
       else {
            setUserInfoDisplay('none');
       }
    }

    const pushAcount = () => {
        history.push('/acount');
    }

    const [setIsLoading,logOut,user] = useAuth();

    const isgnOut = () => {
        logOut()
        .then((result) => {
            user({});
        })
        .catch((error) => console.log(error.message))
        .finally(() => setIsLoading(true));
    }

    return (
      <div className="header-top">
          <div className="container">
              <div className="header-top-container">
                  <div className="logo">
                      <img src={logo} alt="Lab Logo" />
                  </div>
                  <div className="menu">
                      <nav>
                          <ul>
                              <li>
                                  <NavLink to="/home">home</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/services">service</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/doctors">doctor</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/blogs">blog</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/about">about</NavLink>
                              </li>
                              <li>
                                  <NavLink to="/login">login</NavLink>
                              </li>
                              <li>
                                  <span className="user-icon" onClick={showUserInfoBox}><i class="fas fa-user"></i></span>
                                  <div className="user-information" style={{display: userInfoDisplay}}>
                                      <ul>
                                          <li onClick={pushAcount}>Acount</li>
                                          <li>log Out</li>
                                      </ul>
                                  </div>
                              </li>
                              <li>
                                  <span className="response-menu-bar"><i class="fas fa-bars"></i></span>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default NavBar;