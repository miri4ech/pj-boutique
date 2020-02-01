import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { baseUrl } from '../shared/baseUrl';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen : false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        });
    }

    render (){
        return(
            <>
                <Navbar expand="md" color="faded" light >
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="ml-auto mr-auto" href={baseUrl + "home"}>
                            <div className="title">Milan</div>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto mr-auto" navbar>
                                <NavItem>
                                    <HashLink className="nav-link" to={baseUrl + "home"}>Home</HashLink>
                                </NavItem>
                                <NavItem>
                                    <HashLink className="nav-link" smooth to={baseUrl + "home#info"}>Info</HashLink>
                                </NavItem>
                                <NavItem>
                                    <HashLink className="nav-link" smooth to={baseUrl + "home#new"}>New</HashLink>
                                </NavItem>

                                <NavItem>
                                    <HashLink className="nav-link" smooth to={baseUrl + "home#access"}>Access</HashLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron className="jumbotron-fluid jumbotron-extend">
                    <div className="container">
                        <h1 className="title">Milan</h1>
                        <p>This is an online website for a boutique.</p>
                        <Link to ={baseUrl + "all"} ><Button outline color="secondary" size="sm">DISCOVER MORE</Button></Link>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default Header;