
import { NavLink } from 'react-router-dom'
import { Button } from '../../atoms/Button'
import { useAuthProvider } from '../../providers/AuthProvider'
import { useCart } from '../../providers/CartProvider'

import { LOGIN_PATH, REGISTER_PATH, PROFILE_PATH } from '../../utils'

export const RightNav = () => {
    const { user, logOut } = useAuthProvider()
    const { resetBucket } = useCart()

    const renderGuestNavLink = () => {
        return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to={LOGIN_PATH}>Login 🦵</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to={REGISTER_PATH}>Sing Up 🦿</NavLink>
                </li>
            </>
        )
    }
    const renderUserNavLink = () => {
        return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to={PROFILE_PATH}>Profile 🧔🏻</NavLink>
                </li>
                <li className="nav-item">
                    <Button className="btn btn-link nav-link" onClick={() => {
                        logOut()
                        resetBucket()
                    }}>Log Out ✍️</Button>
                </li>
            </>
        )
    }
    return (
        <>
            <ul className="navbar-nav mb-2 mb-lg-0">
                {user ? renderUserNavLink() : renderGuestNavLink()}
            </ul>
        </>
    )
}