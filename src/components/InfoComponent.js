import React, { Component } from 'react';
import { INFO } from '../shared/info';
import { Jumbotron, Table } from 'reactstrap';

class Info extends Component {
    constructor(props){
        super(props)
        this.state = {
            info: INFO
        }
    }

    render(){
        const options = {year: 'numeric', month: 'short', day: '2-digit'}
        const info = this.state.info.map((data) => {
            return(
                <tr key={data.id}>
                    <td>{new Intl.DateTimeFormat('en-US',options).format(new Date(Date.parse(data.date)))}</td>
                    <td>{data.description}</td>
                </tr>
            )
        });

        return(
            <Jumbotron className="jumbotron-fluid theme-white" id="info">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-12 col-md m-1">
                            <h4 className="text-center">INFORMATION</h4>
                            <br />
                        </div>
                        <div className="col-12 col-md m-1">
                            <Table bordered><tbody>{info}</tbody></Table>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}

export default Info;
