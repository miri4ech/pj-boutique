import React, { Component } from 'react';
import Home from './HomeComponent';
import All from './AllComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ITEMS } from '../shared/items';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: ITEMS,
        }
    }

    render() {

        //another way of defining the path component
        const HomePage = () => {
            return (
                <Home items={this.state.items}/>
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route path="/all" component={() => <All items={this.state.items}/>} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
