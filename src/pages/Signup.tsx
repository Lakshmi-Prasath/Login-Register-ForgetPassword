import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { FaGooglePlusSquare, FaFacebookSquare } from 'react-icons/fa';
const Signup = () => {
    return (
        <div className='app'>
            <Container>
                <Row className='loginBorder'>
                    <Col>
                        <div className='loginRight'>
                            <h1 className='login'>Register</h1>
                            <p>Access to our dashboard</p>
                            <form>
                                <div className='loginWrap'>
                                    <div className='marginB10'>
                                        <input className='loginInput' type="text" placeholder='Name' />
                                    </div>
                                    <div className='marginB10'>
                                        <input className='loginInput' type="email" placeholder='Email' />
                                    </div>
                                    <div className='marginB10'>
                                        <input className='loginInput' type="password" placeholder='Password' />
                                    </div>
                                    <div className='marginB10'>
                                        <input className='loginInput' type="password" placeholder='Confirm Password' />
                                    </div>
                                    <div className='marginB10'>
                                        <Link to="/signin">
                                            <button className='loginBtn'>
                                                Register
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
                                <Link className='regColor' to="/">Login</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default Signup