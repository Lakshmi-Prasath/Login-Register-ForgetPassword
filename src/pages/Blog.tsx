import React from 'react'
import { FaGooglePlusSquare, FaAmazon, FaFacebook } from 'react-icons/fa';
import amazonsvg from '../assets/svgicons/amazon-icon-1.svg'
import { Link } from 'react-router-dom'


const Blog = () => {
    return (
        <div>
            <h1>App</h1>
            <h6 className='pacifico'>Google Fonts: "Pacifico" by link method in index.html</h6>
            <h6 className='zeyada'>Google Fonts: "zeyada" by import method in css file</h6>
            <h6 className='great-vibes'>Google Fonts: "Great-Vibes" by downloading file method using "@font-face" method</h6>
            <h5> React Icons: Google Plus : <FaGooglePlusSquare color='#db4a39' size='20px' />  </h5>
            <h5> React Icons: Amazon : <FaAmazon color='#FF9900' size='20px' />  </h5>
            <h5> React Icons: Facebook : <FaFacebook color='#3b5998' size='20px' />  </h5>
            <table style={{ marginLeft: "40%" }}>
                <tr>
                    <th><h5>Downloaded SVG:</h5></th>
                    <th><img style={{ width: "20px" }} src={amazonsvg} /></th>
                </tr>
            </table>
            <Link to="/"
                type='button'
            >
                Logout
            </Link>

            <br />
            <Link to="/dashboard">
                dashboard
            </Link>
            <br />
            <Link to="/"
                type='button'

            >
                Logout
            </Link>
        </div>
    )
}

export default Blog