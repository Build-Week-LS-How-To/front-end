import React, { useState, useEffect } from 'react';
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

const Navigation = (props) => {
    console.log("props from nav", props)
    const [isOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(()=>{
      if (localStorage.getItem('token')) {
        setLoggedIn(true);
      }
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('token')
      setLoggedIn(false);
    }

    console.log(loggedIn)

  
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
                                    {loggedIn
                                        ? 
                                        <Link to='/dashboard'><span>Dashboard</span></Link>
                                        :
                                        <Link to='/login'><span>Login</span></Link>
                                    }
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {loggedIn
                                        ?
                                        <Link to='/' onClick={handleLogout}><DropdownItem>Logout</DropdownItem></Link>
                                        :
                                        <>
                                            <Link to='/login'><DropdownItem>Sign In</DropdownItem></Link>
                                            <DropdownItem divider />
                                            <Link to='/create-account'><DropdownItem>Create Account</DropdownItem></Link>
                                        </>
                                    }
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