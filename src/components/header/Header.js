
import { Link, NavLink } from 'react-router-dom'

import { useCart } from "../../providers/CartProvider"

import "./header.css"

export const Header = () => {
    const { cart } = useCart()
    console.log('_CART_', cart)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/products">Products</NavLink>
                        </li>
                        <li>
                            <Link className="nav-link" to="/newProduct">NEWS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shoping-cart">
                                <span className="card-font"> card :</span>
                                <span className="card-font">
                                    {cart.total === 0 ? '🫗  ცარიელია' : `🛒 ${Math.round(cart.total)}`}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}