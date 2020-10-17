import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



class Poster extends Component {
    state = {
        artists: []
    };

    async componentDidMount() {
        //call backend
        const { data } = await axios.get('http://localhost:3000/artists/');
        //set state
        this.setState({ artists: data });
    }


    render() {

        return (
            this.state.artists.map((artist) =>
                <div key={artist.id} className="d-flex justify-content-center container my-5">
                    <div className="row Larger shadow py-3 border border-secondary rounded w-75">
                        <div className="col-lg-3 col-md-2 col-sm-1"></div>
                        <div className="col-lg-6 col-md-8 col-sm-10  text-white w-100 h-25 ">
                            <Link to={"/" + artist.cover}><img className="card-img Larger shadow rounded" src={"../images/covers/" + artist.cover + ".jpg"} alt="Card image" /></Link>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-1"></div>
                    </div>
                </div>
            )
        );

    }
}

export default Poster;
