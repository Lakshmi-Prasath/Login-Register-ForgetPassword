import React from 'react'
import '../styles/sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar">
                <Link className="active" to="/">
                    Home
                </Link>
                <a href="#services"><i className="fa fa-fw fa-wrench"></i> Services</a>
                <a href="#clients"><i className="fa fa-fw fa-user"></i> Clients</a>
                <a href="#contact"><i className="fa fa-fw fa-envelope"></i> Contact</a>
            </div>

            <div className="main">
                <h2>Sidebar with Icons</h2>
                <p>This side navigation is of full height (100%) and always shown.</p>
                <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            </div>
        </div>
    )
}

export default Sidebar