import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


function Navigation(){
    return(
        <Navbar bg="dark" variant="dark" className="nav vw-100"  fixed="top">
            <Nav className="container-fluid vw-100">
            <p className="nav-title">Allegra Hilburger | Software Engineer</p>
            {/* <Nav.Text className="nav-title mr-auto">Allegra Hilburger | Software Engineer| Web Developer| Entrepeneur</Nav.Text> */}
            <Navbar.Text className="left_nav ml-auto" >
                
                <a href="https://github.com/Legz444?tab=repositories">GitHub</a>
                <a href="https://www.linkedin.com/in/allegra-hilburger/">LinkedIn</a>
            </Navbar.Text>
            </Nav>
        </Navbar>
    )
}
export default Navigation;