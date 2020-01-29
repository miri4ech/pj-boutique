import React, { Component } from 'react';
import { Jumbotron, Button, Form, FormGroup, Label, Input, Col, InputGroup, InputGroupAddon} from 'reactstrap';


class Newsletter extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event){
        alert('Your email address is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <Jumbotron className="jumbotron-fluid theme-white">
                <div className="container">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="email" sm={4}>SIGN UP FOR NEWSLETTER</Label>
                            <Col sm={8}>
                                <InputGroup>
                                    <Input type="email" id="email" name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} />
                                    <InputGroupAddon addonType="append"><Button outline color="secondary">REGISTER</Button></InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>  
                    </Form>
                </div>
            </Jumbotron>
        )
    }
}

export default Newsletter;


