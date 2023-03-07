
import { useContext } from "react"

import { CartContext } from "../../providers/CartProvider"

import "./header.css"

export const Header = () => {
    const { cart } = useContext(CartContext)
    console.log('_CART_', cart)
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <h2 className="navbar-brand">Navbar</h2>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="nav-item">
                    <a className="nav-line" href="/">
                        <span className="card-font"> card :</span>
                        <span className="card-font">
                            {cart.total === 0 ? '🫗 ცარიელია' : `🛒 ${Math.round(cart.total)}`}
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    )
}