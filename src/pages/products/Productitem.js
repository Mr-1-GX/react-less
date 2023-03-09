
import { useState } from 'react'
import { useCart } from '../../providers/CartProvider'
import { Alert, Button } from '../../atoms'
import './ProductItem.css'

export const ProductItem = ({ product }) => {
    const {
        addNevItem,
        removeItem,
        cart: { items: cardItems }
    } = useCart()
    const [outOfStock, setOutOfStock] = useState(false)
    const isInCart = product.id in cardItems

    const handleAddCart = () => {
        if (product.stock) {
            addNevItem(product)
        } else {
            setOutOfStock(true)
        }
    }

    return (
        <div className="card productItem--card">
            <div className="card">
                <h3>კატეგორია - {product.category},</h3>
                <h2>{product.name},</h2>
            </div>
            <div className="card-header d-flax">
                <div className='d-flax flax-column'>
                    {outOfStock && <Alert massage="დამატება შეუძლებელია" />}
                    <h5>{product.stock ? 'მარაგშია' : 'არარის'}</h5>
                </div>
                <h5>
                    {isInCart ? `კალათაში: ${cardItems[product.id].qty}` : `არ არისკალათაში`}
                </h5>
                <h4 className="card-header">
                    ფასი: {product.price}$
                </h4>
                <div className='btn-group'>
                    <Button
                        className='btn btn-outline-success'
                        onClick={handleAddCart}
                        disabled={outOfStock}
                    >
                        ADD 👜
                    </Button>
                    <Button
                        className='btn btn-outline-danger'
                        onClick={() => removeItem(product)}
                        disabled={!isInCart}
                    >
                        REMOVE 🗑
                    </Button>
                </div>
            </div>
        </div>
    )
}