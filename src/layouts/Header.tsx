import React from 'react'
import '../styles/header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div >
            <div className="header">
                <a href="#default" className="logo">Header</a>
                <div className="header-right">
                    <Link className="active" to="/">
                        Home
                    </Link>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </div>
    )
}

export default Header