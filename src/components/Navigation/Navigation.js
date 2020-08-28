import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';

import { Link } from 'react-router-dom'

// STYLES
import '../../styles/navigation.scss'

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
            <Container>
            <div className="navigation-inner">

                <NavbarBrand>
                    <h1><Link to='/'>How To</Link></h1>
                </NavbarBrand>

                <div className="nav-right">
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <Link to='/'>About</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to='/meetteam'>Meet The Team</Link>
                                </NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar >
                                <DropdownToggle nav caret className="nav-dropdown">
                                    <span>Log In</span>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link to='/login'><DropdownItem>Sign In</DropdownItem></Link>
                                    <DropdownItem divider />
                                    <Link to='/dashboard'><DropdownItem>Dashboard</DropdownItem></Link>
                                    <DropdownItem divider />
                                    <Link to='/create-account'><DropdownItem>Create Account</DropdownItem></Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </div>
            </div>
            </Container>
        </Navbar>
      </div>
    )
}

export default Navigation