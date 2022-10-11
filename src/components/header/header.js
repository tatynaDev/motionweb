import React from 'react';
import logo from '../../assets/img/logo.svg'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <section id='header'>
          <div className='container'>
              <div className='header--general'>
                  <div className='header--general__logos'>
                     <Link to="/"> <img src={logo} alt=""/></Link>
                     <NavLink to='/'>
                         <div className='header--general__logos--title'>
                             <h4>Motion</h4>
                             <h5>Study</h5>
                         </div>
                     </NavLink>
                  </div>
                  <div className="header--general__navbar">
                      <Link to="/content">About company </Link>
                      <Link to="/content-two">Services</Link>
                      <Link to="/study programs">Study Programms</Link>
                      <Link to="#">Contacts</Link>
                  </div>
              </div>
          </div>
        </section>
    );
};

export default Header;