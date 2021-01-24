import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div style={{textAlign: "center"}} >
            <Link to='/' className="btn red lighten-1">Home</Link>
            <span> </span>
            <Link to='/forecast' className="btn red lighten-1">Favorite</Link>
        </div>
    )
}

export default Navbar;