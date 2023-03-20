
import { NavLink } from 'react-router-dom'

import { LOGIN_PATH, REGISTER_PATH } from '../../utils'

export const RightNav = () => {
    return (
        <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={LOGIN_PATH}>Login 🦵</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={REGISTER_PATH}>Sing Up 🦿</NavLink>
            </li>
        </ul>
    )
}