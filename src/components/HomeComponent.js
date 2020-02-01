import React, { Component } from 'react';
import { Jumbotron, Table } from 'reactstrap';
import Info from './InfoComponent';
import Newsletter from './NewsletterComponent';
import New from './NewComponent';

class Home extends Component{
    render(){
    return(
        <div>
            <Info />
            <New items={this.props.items} />
            <Newsletter />
            <Jumbotron className="jumbotron-fluid" id="access">
                <div className="container">
                    <h4 className="text-center">Access</h4>
                    <br />
                    <div className="row align-items-start">
                        <div className="col-12 col-md m-1">
                            <Table bordered>
                                <tbody>
                                    <tr>
                                        <td>Open hours : </td>
                                        <td>10am - 6pm</td>
                                    </tr>
                                    <tr>
                                        <td>Close : </td>
                                        <td>Thursdays</td>
                                    </tr>
                                    <tr>
                                        <td>Tel : </td>
                                        <td>+81 123 456789</td>
                                    </tr>
                                    <tr>
                                        <td>Parking : </td>
                                        <td>Available</td>
                                    </tr>  
                                </tbody>
                            </Table>
                        </div>
                        <div className="col-12 col-md m-1">
                            <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207446.9730479291!2d139.6007829165666!3d35.66816252785147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b857628235d%3A0xcdd8aef709a2b520!2z5p2x5Lqs6YO95p2x5Lqs!5e0!3m2!1sja!2sjp!4v1580218670382!5m2!1sja!2sjp" width="100%" height="300"></iframe>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
    }
}

export default Home;