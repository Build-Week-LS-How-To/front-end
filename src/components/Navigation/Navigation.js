import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const Navigation = () => {

    return(
        <Navbar>
            <Nav>
                <NavItem>
                    <Link to='/'>Home</Link>
                </NavItem>
                
                <NavItem>
                    <Link to='/login'>Login</Link>
                </NavItem>

                <NavItem>
                    <Link to='/create-account'>Create Account</Link>
                </NavItem>

            </Nav>
        </Navbar>
    )
}

export default Navigation