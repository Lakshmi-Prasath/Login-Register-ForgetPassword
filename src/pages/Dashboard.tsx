import React from 'react'
import Header from '../layouts/Header';
import Maincontent from '../layouts/Maincontent';
import Sidebar from '../layouts/Sidebar';
import { Link } from 'react-router-dom'

function Dashboard() {

    return (
        <div>
            <Header />
            <Sidebar />
            <Maincontent />
            <Link to="/blog">
                Blog
            </Link>
        </div>
    )
}

export default Dashboard