import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav className="nav" style={{display:"flex",justifyContent:"space-between"}}>
            <Link style={{ color: "white", fontWeight: "bold", textDecoration: "none" , paddingLeft:20}} to='/'> <h3> Browse Next Movie</h3></Link>
        </nav>
    )
}

export default Nav;