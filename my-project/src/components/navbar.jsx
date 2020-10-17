import React from 'react';
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/"><span style={{ color: 'red' }}>M</span>usic</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown active">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Artists
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/jimi_hendrix">Jimi Hendrix <i className="fas fa-headphones-alt"></i></Link>
                            <Link className="dropdown-item" to="/madonna">Madonna <i className="fas fa-headphones-alt"></i></Link>
                            <Link className="dropdown-item" to="/johnny_cash">Johnny Cash <i className="fas fa-headphones-alt"></i></Link>
                            <Link className="dropdown-item" to="/pink_floyd">Pink Floyd <i className="fas fa-headphones-alt"></i></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;