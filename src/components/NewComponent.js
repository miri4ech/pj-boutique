import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron,Card, CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { baseUrl } from '../shared/baseUrl';

class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items,
        }
    }    

    render() {
        const new_items = this.state.items.filter(item => item.status === 1);
        const items = new_items.map((item) => {
            return(
                <div key={item.id} >
                    <Card>
                        <CardImg top height="300" width="100%" src={item.image} alt={item.name} />
                        <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            <CardSubtitle>{item.price}</CardSubtitle>
                            <br />
                            <Link to ={baseUrl + "all"} ><Button outline color="secondary">DISCOVER MORE</Button></Link>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return(
            <Jumbotron className="jumbotron-fluid" id="new">
                <div className="container">
                <h4 className="text-center">NEW ARRIVALS</h4>
                <br />
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                    desktop: {
                    breakpoint: {
                    max: 3000,
                    min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                    max: 464,
                    min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                    max: 1024,
                    min: 464
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                    }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                {items}
                </Carousel>
                </div>
            </Jumbotron>
        )
    }
}

export default New;



