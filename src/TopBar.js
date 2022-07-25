import React, { Fragment } from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';

function TopBar()
{
    return(
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Button>
                        <Nav.Link href="#LogIn" variant="outline-light">Log In</Nav.Link>
                    </Button> 
                    <Button variant="Success">Why wont this button be styled</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopBar;