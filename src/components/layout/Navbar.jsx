import React from "react";
import {Link} from "react-router-dom";  // Used to get the same state of dom after clicking any link and get back to previous one again.

function Navbar(props){

    return(
        <nav className="navbar bg-warning">
            <h4><i class="fab fa-github"></i>&nbsp;{props.title}</h4>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}


export default Navbar;