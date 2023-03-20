
import { Link } from 'react-router-dom'

import { LeftNav } from './LeftNav'

import "./header.css"
import { RightNav } from './RightNav'

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <LeftNav />
                    <RightNav />
                </div>
            </div>
        </nav>
    )
}