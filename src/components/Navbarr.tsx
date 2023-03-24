import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Container } from 'react-bootstrap';


const Navbarr = () => {
    const navigate = useNavigate();
    return (
        <div >
            <Container>
                <div className="header">
                    <Navbar bg="light" expand="lg">
                        <div
                            className="logo"
                            onClick={() => {
                                navigate("/");
                            }}

                        >
                            <h6>Routing Example v6</h6>
                        </div>
                        <div className="header-right">
                            <div>
                                <Link to="/">
                                    Home
                                </Link>
                            </div>
                            <div>

                                <Link to="/blog">
                                    Blog
                                </Link>
                            </div>
                        </div>
                    </Navbar>
                </div>
            </Container>

        </div>
    )
}

export default Navbarr