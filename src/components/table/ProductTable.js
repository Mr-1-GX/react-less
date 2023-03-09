
import { useCart } from "../../providers/CartProvider"

import { Button } from '../../atoms'

export const ProductTableRow = ({ name, price, qty, id, onCartAdd, onCartRemove }) => {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{qty}</td>
            <td>{price * qty}</td>
            <td>
                <div className="btn-group">
                    <Button className='btn btn-outline-success' text='➕' onClick={onCartAdd} />
                    <Button className='btn btn-outline-warning' text='➖' onClick={onCartRemove} />
                </div>
            </td>
        </tr >
    )
}

export const ProductTable = () => {
    const { addNevItem, removeItem, cart } = useCart()
    const renderProducts = () => {
        const cartItems = Object.entries(cart.items)
        if (!cartItems.length) {
            return (
                <tr>
                    <td colSpan='5'>
                        <h2 className="text-center">Casrt is Empty</h2>
                    </td>
                </tr>
            )
        }
        return (
            cartItems.map(([productId, item]) => {
                const currentItem = {
                    ...item,
                    id: productId
                }
                return (
                    <ProductTableRow
                        key={`product-${productId}`}
                        {...item}
                        id={productId}
                        onCartAdd={() => addNevItem(currentItem)}
                        onCartRemove={() => removeItem(currentItem)}
                    />
                )
            })
        )
    }
    console.log(cart)
    return (
        <table className="table table-hover border-success p-2 mb-2 border-opacity-25 border-bottom">
            <thead className="h4 pb-2 mb-4 text-muted border-bottom border-info">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">დასახელება</th>
                    <th scope="col">რაოდენობა</th>
                    <th scope="col">ფასი</th>
                    <th scope="col">მთლიანი თანხა</th>
                    <th scope="col">მოქმედება</th>
                </tr>
            </thead>
            <tbody>
                {renderProducts()}
            </tbody>
        </table>
    )
}