import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div style={{textAlign: "center"}}>
            <Link to='/'>Home</Link>
            <span> </span>
            <Link to='/forecast'>Favorite</Link>
        </div>
    )
}

export default Navbar;