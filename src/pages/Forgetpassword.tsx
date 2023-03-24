import React from 'react'
import "../assets/styles/home.css"
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'

import { FaGooglePlusSquare, FaFacebookSquare } from 'react-icons/fa';




const Forgetpassword = () => {
    return (
        <div className='app'>
            <Container>
                <Row className='loginBorder'>
                    <Col>
                        <div className='loginRight'>
                            <h1 className='login'>Forgot Password?</h1>
                            <p>Enter your email to get a password reset link</p>
                            <form>
                                <div className='loginWrap'>

                                    <div className='marginB10'>
                                        <input className='loginInput' type="email" placeholder='Email' />
                                    </div>
                                    <div className='marginB10'>
                                        <Link to="/signin">
                                            <button className='loginBtn'>
                                                Reset Password
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </form>

                            <div className='loginOr'>
                                <span className='orLine'></span>
                                <span className='spanOr'> OR</span>
                            </div>
                            <div className='loginWith'>
                                <span>Register With</span>
                                <a className='noLinkStyle' href=""> <FaFacebookSquare color='#3b5998' size='20px' /></a>
                                <a className='noLinkStyle' href=""> <FaGooglePlusSquare color='#db4a39' size='20px' /></a>
                            </div>
                            <div className='accRegister'>
                                "Already have an account?"
                                <Link className='regColor' to="/signin">Login</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default Forgetpassword