import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Jumbotron} from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderCard (props) {

        const all_items = props.items.map((item) => {
            return(
                <div key={item.id} className="col-sm-6 col-md-4">
                    <Card>
                        <CardImg height="250" src={item.image} alt={item.name} />
                        <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardSubtitle>{item.price}</CardSubtitle>
                        <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return all_items;

}

function All (props){
    return(
        <Jumbotron className="theme-white">
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>All</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h4>All Items</h4>
                        <hr />
                    </div>                
                </div>
                <div className="row align-items-start">
                        <RenderCard items={props.items} />
                </div>
            </div>
        </Jumbotron>
    )
}


export default All;