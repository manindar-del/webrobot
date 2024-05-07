import '../App.css';
import './login.css';
import React from 'react';
import Header from './Header' 
import { } from 'reactstrap';
import {Link} from "react-router-dom";
import Icon4 from '../images/icon4.svg'
import Icon5 from '../images/icon5.svg'
import Icon6 from '../images/icon6.svg'

function Login(props) {
  return (
    <>    
    <Header/>

    <section className="loginMain">
      <div className="loginWrap">
        <h2>Thanks for choosing WebRobot for your valuable data business!</h2>
        <h3>Use this app to extract every data on the Internet and create value-added and proﬁtable datasets and big-data projects.</h3>
        <ul>
          <li>
            <Link to="#0">
              <img src={Icon4} alt="Icon"/>
    	        <span className="login-text">Documentation <br />&amp; support</span>
            </Link>
          </li>
          <li>
            <Link to="/SelfServiceHome">
              <img src={Icon5} alt="Icon" />
              <span className="login-text">Login</span>
      	    </Link>
          </li>
          <li>
            <Link to="/#0">
        	    <img src={Icon6} alt="Icon" />
              <span className="login-text">Sign up</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>

    </>    
  );
}
export default Login;