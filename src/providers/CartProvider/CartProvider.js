
import { createContext, useContext } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const CartContext = createContext({
    total: 0,
    items: {}
});
CartContext.displayName = 'CartContext';

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useLocalStorage('super-app:shoping-cart', {
        total: 0,
        items: {}
    })
    const addNevItem = (product) => {
        setCart((prev) => {
            let newItem
            if (prev.items[product.id]) {
                const cartProduct = prev.items[product.id]
                newItem = {
                    ...cartProduct,
                    qty: cartProduct.qty + 1
                }
            } else {
                newItem = {
                    price: product.price,
                    name: product.name,
                    qty: 1
                }
            }
            return (
                {
                    ...prev,
                    total: prev.total + product.price,
                    items: {
                        ...prev.items,
                        [product.id]: newItem
                    }
                }
            )
        })
    }
    const removeItem = (product) => {
        setCart((prev) => {
            let newItem = { ...prev.items }
            let total = prev.total
            if (prev.items[product.id]) {
                const cartProduct = prev.items[product.id]
                if (cartProduct.qty > 1) {
                    const update = {
                        ...cartProduct,
                        qty: cartProduct.qty - 1
                    }
                    newItem = {
                        ...prev.items,
                        [product.id]: update
                    }
                    total -= product.price
                } else {
                    total -= product.price
                    delete newItem[product.id]
                }
            }
            return (
                {
                    ...prev,
                    total,
                    items: {
                        ...newItem
                    }
                }
            )
        })
    }
    return (
        <CartContext.Provider value={{
            cart,
            addNevItem,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const cart = useContext(CartContext)
    if (!cart) {
        throw SyntaxError('Card Provaider is not defined')
    }
    return cart
}