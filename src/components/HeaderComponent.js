import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    render (){
        return(
            <>
                <Navbar expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo192.png" height="30" width="41" alt="Boutique Milan" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/new"><span className="fa fa-info fa-lg"></span>New</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/styles"><span className="fa fa-list fa-lg"></span>Styles</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/access"><span className="fa fa-address-card fa-lg"></span>Access</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Boutique Milan</h1>
                                <p>This is a simple online website for boutique!</p>
                            </div>
                        </div>
                    </div>
                    
                </Jumbotron>
            </>
        )
    }
}

export default Header;