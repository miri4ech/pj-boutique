import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Jumbotron } from 'reactstrap';

function Footer(props) {
    return(
        <div className="footer theme">
            <Jumbotron className="jumbotron-fluid theme-white">
                <div className="container">
                    <div className="row">             
                        <div className="col-4 offset-1 col-sm-2">
                            <ul className="list-unstyled">
                                <li><HashLink to="/home">Home</HashLink></li>
                                <li>
                                    <HashLink smooth to="/home#info">Info</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="/home#new">New</HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="/home#access">Access</HashLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-7 col-sm-5">
                            <h4>Our Address</h4>
                            <address>
                            123-4, Shibuya, Tokyo<br />
                            Japan<br />
                            <i className="fa fa-phone fa-lg"></i> +81 123 456789<br />
                            <i className="fa fa-fax fa-lg"></i> +81 123 456789<br />
                            <i className="fa fa-envelope fa-lg"></i> boutique@milan.com
                            </address>
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                <a className="btn btn-social-icon" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon" href="mailto:boutique@milan.com"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </Jumbotron>
            <div className="row justify-content-center theme">             
                <div className="col-auto">
                    <p>© Copyright 2020 Boutique Milan</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;