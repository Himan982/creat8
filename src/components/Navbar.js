import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <div className="logo"><img src='assets/logos/Create-white-01.webp' alt="Creat8Logo" /></div>
                    <div className="nav-item">
                        <ul>
                            <li><Link to="/creat8" className="active" href="/">Home</Link></li>
                            <li><Link to="/Services" className="active" >Services</Link></li>
                            <li><Link to="/team" className="active" >Our Team</Link></li>
                            <li><Link to="/works" className="active" >Our Works</Link></li>
                        </ul>
                    </div>
                    <div className="contact-btn"><Link to="/contact" > <button className="button1">Contact_Us</button></Link></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;