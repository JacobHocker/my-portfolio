import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { BsFillSunFill } from 'react-icons/bs';
import { MdOutlineNightlight } from 'react-icons/md';
import './NavBar.scss';
import  darkLogo  from '../../assets/images/portfolio-logo-dark-2.png';
import lightLogo from '../../assets/images/portfolio-logo-light.png';

function NavBar({ onToggleDarkMode, isDark }) {
    return(
        <div className={isDark === true ? "dk-nav-bar-container" : "lt-nav-bar-container"}>
            <Navbar collapseOnSelect expand="md" variant={isDark === true ? 'dark' : 'light'} >
                <Container>
                <Navbar.Brand className='nav-bar-brand' href="/">{isDark === true ? <img src={darkLogo} className='logo-dark' alt='jh' /> : <img src={lightLogo} className='logo-light' alt='jh' /> }</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="responsive-navbar-nav">
                    <div className="nav-list">
                        <Nav className="me-auto">
                        <Nav.Link href="/about-me"><h1>About Me </h1></Nav.Link>
                        <Nav.Link href="/skills"><h1>My Skills</h1></Nav.Link>
                        
                        <NavDropdown id={isDark === true ? 'dk-drop' : 'lt-drop'}  title='Projects' className={isDark === true ? "dk-collapsible-dropdown" : "lt-collapsible-dropdown"}>
                            <NavDropdown.Item className={isDark === true ? 'dk-drop-item' : 'lt-drop-item'} href="/overstat-lab"><h1>OverStat Lab</h1></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={isDark === true ? 'dk-drop-item' : 'lt-drop-item'} href="/entertainment-hub"><h1>Entertainment Hub</h1></NavDropdown.Item>
                        </NavDropdown>
                        
                        {isDark === true ? <button className='sunny' onClick={onToggleDarkMode}><BsFillSunFill /></button> : <button  className='moon' onClick={onToggleDarkMode}><MdOutlineNightlight /></button>}
                        </Nav>
                    </div>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;