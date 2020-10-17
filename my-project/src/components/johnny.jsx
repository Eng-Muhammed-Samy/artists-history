import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './navbar';


class Johnny extends Component {
    state = {
        artists: [],
        albums: []
    }
    async componentDidMount() {
        const { data } = await axios.get('http://localhost:3000/artists/');
        const art1 = data[2];
        const albums = art1.albums;
        console.log(albums);
        this.setState({ artists: art1 });
        this.setState({ albums, albums });
    }
    renderalbums = () => {
        return (
            this.state.albums.map(album => <img key={album.albumId} ser={`../images/covers/${album.cover}/.jpg`} />)
        )
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                {/* ******************************************* */}
                <div className="container mb-4">
                    <div className="row ">
                        <div className="col-sm-0 col-md-2 col-lg-3"></div>
                        <div className="d-flex justify-content-center display-1 col-sm-12 col-md-8 col-lg-6 my-5 border-bottom border-dark rounded Larger shadow bg-danger text-light"><h1>MUSIC</h1></div>
                        <div className="col-sm-0 col-md-2 col-lg-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-0 col-md-2 col-lg-3"></div>
                        <div className="col-sm-12 col-md-8 col-lg-6">
                            <div className="card-deck">
                                <div className="card Larger shadow">
                                    <img src={`../images/covers/${this.state.artists.cover}.jpg`} className="card-img-top" style={{ borderRadius: "50%" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{this.state.artists.name}</h5>
                                        <p className="card-text text-muted text-center">{this.state.artists.bio}</p>
                                    </div>
                                    <div className="card-footer" style={{ textAlign: "center" }}>
                                        <div className="text-muted">
                                            {this.state.albums.map(album => <img key={album.albumId} src={`../images/albums/${album.cover}.jpg`} width="200px" />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-0 col-md-2 col-lg-3"></div>
                    </div>
                </div>
                {/* ******************************************* */}
            </React.Fragment>
        )

    }
}

export default Johnny;