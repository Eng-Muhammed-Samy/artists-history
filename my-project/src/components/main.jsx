import React, { Component } from 'react';
import axios from 'axios';

import AddPosr from "./addPosr";
import Cover from './cover';
import Poster from './poster';
import NavBar from './navbar';


class Main extends Component {
    state = { artists: [] }
    async componentDidMount() {
        //call backend
        const { data } = await axios.get('http://localhost:3000/artists/');
        //set state
        this.setState({ artists: data });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Cover />
                <AddPosr />
                <Poster />
            </React.Fragment>
        );
    }
}

export default Main;