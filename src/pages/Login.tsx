import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../assets/styles/login.css'
const Login = () => {
    return (

        <div className='mt10'>
            <Container>
                <div className='formBorder'>
                    <div className='formTitle'>
                        <span className='titleLine'></span>
                        <span className='titleName'>Basic Details</span>
                    </div>

                    <Row className='mb-2'>
                        <Col>
                            <div>
                                <h6 className='inputId'>Teacher ID</h6>
                                <input type="text" className='formInput' />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h6 className='inputId'>Name</h6>
                                <input type="text" className='formInput' />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col>
                            <div>
                                <h6 className='inputId'>Gender</h6>
                                <Form.Select className='formInput' aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h6 className='inputId'>Date of Birth</h6>
                                <input type="date" className='formInput' />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col>
                            <div>
                                <h6 className='inputId'>Mobile Number</h6>
                                <input type="number" className='formInput' />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h6 className='inputId'>Joining Date</h6>
                                <input type="date" className='formInput' />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col>
                            <div>
                                <h6 className='inputId'>Qualification</h6>
                                <input type="text" className='formInput' />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h6 className='inputId'>Experience</h6>
                                <input type="text" className='formInput' />
                            </div>
                        </Col>
                    </Row>
                    <div className='formTitle'>
                        <span className='titleLine'></span>
                        <span className='titleName'>Login Details</span>
                    </div>
                    <Row className='mb-2'>
                        <Col>
                            <div>
                                <h6 className='inputId'>User Name</h6>
                                <input type="text" className='formInput' />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h6 className='inputId'>Email ID</h6>
                                <input type="email" className='formInput' />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col>
                            <div>
                                <h6 className='inputId'>Password</h6>
                                <input type="password" className='formInput' />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h6 className='inputId'>Repeat Password</h6>
                                <input type="password" className='formInput' />
                            </div>
                        </Col>
                    </Row>
                    <div className='formTitle'>
                        <span className='titleLine'></span>
                        <span className='titleName'>Address</span>
                    </div>
                    <Row className='mb-2'>
                        <Col>
                            <div>
                                <h6 className='inputId'>Address</h6>
                                <input type="text" className='formInput' />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col>
                            <div>
                                <h6 className='inputId'>City</h6>
                                <input type="text" className='formInput' />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h6 className='inputId'>State</h6>
                                <Form.Select className='formInput' aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">Tamil Nadu</option>
                                    <option value="2">Puducherry</option>
                                </Form.Select>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col>
                            <div>
                                <h6 className='inputId'>Zip Code</h6>
                                <input type="number" className='formInput' />
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h6 className='inputId'>Country</h6>
                                <Form.Select className='formInput' aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">India</option>
                                    <option value="2">USA</option>
                                </Form.Select>
                            </div>
                        </Col>
                    </Row>
                    <div className='marginB10 submitbtn'>
                        <Link to="/">
                            <button className='loginBtn'>
                                Submit
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Login