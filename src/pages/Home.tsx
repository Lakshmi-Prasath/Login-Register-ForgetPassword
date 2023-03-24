import React from 'react'
import "../assets/styles/home.css"
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'



import { FaGooglePlusSquare, FaFacebookSquare, FaDashcube } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='app'>
            <Container>
                <Row className='loginBorder'>

                    <Col >
                        <div className='loginRight'>
                            <h1 className='login'>Login</h1>
                            <p>Access to our dashboard</p>
                            <form>
                                <div className='loginWrap'>
                                    <div className='marginB10'>
                                        <input className='loginInput' type="text" placeholder='Email' />
                                    </div>
                                    <div className='marginB10'>
                                        <input className='loginInput' type="text" placeholder='Password' />
                                    </div>
                                    <div className='marginB10'>
                                        <Link to="/signin">
                                            <button className='loginBtn'>
                                                Login
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <Link className='forgetPassword' to="/forgetpassword">
                                    Forget Password?
                                </Link>
                            </div>
                            <div className='loginOr'>
                                <span className='orLine'></span>
                                <span className='spanOr'> OR</span>
                            </div>
                            <div className='loginWith'>
                                <span>Login With</span>
                                <Link to="/blog">
                                    <FaDashcube className='noLinkStyle' color='#3b5998' size='20px' />
                                </Link>
                                <a className='noLinkStyle' href=""> <FaFacebookSquare color='#3b5998' size='20px' /></a>
                                <a className='noLinkStyle' href=""> <FaGooglePlusSquare color='#db4a39' size='20px' /></a>
                            </div>
                            <div className='accRegister'>
                                "Don't have an account?"
                                <Link className='regColor' to="/signup">Register</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default Home