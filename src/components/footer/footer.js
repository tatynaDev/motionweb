import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import c from '../../../src/assets/img/c.svg'


const Footer = () => {
    return (
        <section id='footer'>
          <div className="container">
              <div className='footer--general__logos'>
                  <Link to="/"> <img src={logo} alt=""/></Link>
                  <NavLink to='/'>
                      <div className='footer--general__logos--title'>
                          <h4>Motion</h4>
                          <h5>Study</h5>
                      </div>
                  </NavLink>
              </div>
              <div className="footer--general__nav">
                  {/*<a href="#">About company</a>*/}
                  {/*<a href="#">Services</a>*/}
                  {/*<a href="#">Study Programs</a>*/}
                  {/*<a href="#">Contacts</a>*/}
                  <Link to="/content">About company </Link>
                  <Link to="/content-two">Services</Link>
                  <Link to="/study programs">Study Programms</Link>
                  <Link to="/">Contacts</Link>
              </div>
              <div className='footer--general__line'></div>
          </div>
        </section>
    );
};

export default Footer;