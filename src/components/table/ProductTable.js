
import { useCart } from "../../providers/CartProvider"
import { ProductTableRow } from './ProductTableRow'

export const ProductTable = () => {
    const { addNewItem, removeItem, cart } = useCart()
    const renderProducts = () => {
        const cardItems = Object.entries(cart.item)
        if (!cardItems.length) {
            return (
                <tr>
                    <td colSpan='5'>
                        <h2 className="text-center">Casrt is Empty</h2>
                    </td>
                </tr>
            )
        }
        return (
            cardItems.map(([productId, item]) => {
                const currentItem = {
                    ...item,
                    id: productId
                }
                return (
                    <ProductTableRow
                        key={`product-${productId}`}
                        {...item}
                        id={+productId}
                        onCartAdd={() => addNewItem(currentItem)}
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
                    <th scope="col">ფასი</th>
                    <th scope="col">რაოდენობა</th>
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