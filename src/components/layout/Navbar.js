import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand text-success" to="/">Evernote++</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/favourite">Favorite</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
                </ul>
                <ul className="navbar-nav justify-content-end">
                <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
