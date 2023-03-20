
import { Link, NavLink } from 'react-router-dom'

import { useCart } from "../../providers/CartProvider"
import { HOME_PATH, PRODUCTS_PATH, SHOPNG_CART_PATH } from '../../utils'

export const LeftNav = () => {
    const { cart } = useCart()
    console.log('_CART_', cart)
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={HOME_PATH}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={PRODUCTS_PATH}>Products</NavLink>
            </li>
            <li>
                <Link className="nav-link" to="/newProduct">NEWS</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={SHOPNG_CART_PATH}>
                    <span className="card-font"> card :</span>
                    <span className="card-font">
                        {cart.total === 0 ? '🫗  ცარიელია' : `🛒 ${Math.round(cart.total)}`}
                    </span>
                </Link>
            </li>
        </ul>
    )
}