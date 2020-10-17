import React, { Component } from 'react';
import axios from 'axios';
class AddPosr extends Component {
    state = {
        artists: []
    }
    async componentDidMount() {
        const { data } = await axios.get('http://localhost:3000/artists/');
        const d1 = data[0];
        this.setState({ artists: d1 });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container my-5 justify-content-end">
                    {/* ********************************************** */}
                    <div className="row d-flex justify-content-end mb-3">
                        <button type="button" className="btn btn-outline-dark" data-toggle="modal" data-target="#exampleModal">
                            Add Artist</button>
                    </div>

                    <div className="modal fade" id="exampleModal"
                        role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body m-5">
                                    <label>Enter Artist Image Url</label>
                                    <input id="imgurl" type="text" className="w-100" />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary"
                                        onClick={async () => {
                                            let inp = document.getElementById('imgurl');
                                            const img = document.createElement('img');
                                            const link = document.createElement('a');
                                            img.setAttribute('src', inp.value)
                                            img.setAttribute('class', "card-img ")
                                            link.appendChild(img);
                                            link.setAttribute('href', '/newArt');
                                            const divimg = document.createElement('div');
                                            const col1 = document.createElement('div');
                                            const col2 = document.createElement('div');
                                            divimg.appendChild(link)
                                            const row = document.createElement('div');
                                            row.appendChild(col1);
                                            row.appendChild(divimg);
                                            row.appendChild(col2);
                                            divimg.setAttribute('class', "col-lg-6 col-md-8 col-sm-10 text-white w-100 h-25")
                                            row.setAttribute('class', "row Larger shadow  py-3 rounded w-75");
                                            col1.setAttribute('class', "col-lg-3 col-md-2 col-sm-1");
                                            col2.setAttribute('class', "col-lg-3 col-md-2 col-sm-1");
                                            const conainer = document.createElement('div');
                                            conainer.setAttribute('class', "d-flex justify-content-center container my-5");
                                            conainer.appendChild(row);
                                            document.getElementById('root').appendChild(conainer);
                                        }}
                                    >ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ********************************************** */}
                    <div className="row d-flex justify-content-center">
                        <div className="col-8 ">
                            <p style={{ fontFamily: "Arial", fontSize: "2erm", }} className="p text-center text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab odit. Eveniet id itaque aliquam fuga quisquam reiciendis, sequi dolor! Distinctio eveniet sunt magni doloremque ut minus sit, repellendus explicabo.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default AddPosr;
