import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Workout Tracker</h1>

            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/" >Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
            </button>



            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

                        <Link className="nav-link" to="/workouts">Your Workouts</Link>

                        <Link className="nav-link" to="/add">Add Workout</Link>
                        
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">Account</a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
                         </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;