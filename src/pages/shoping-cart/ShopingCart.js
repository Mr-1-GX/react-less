
import { useEffect } from 'react'
import { ProductTable } from '../../components/table'

export const ShopingCart = () => {
    //  Component each re-render 
    // useEffect(() => {
    //     console.log('SHOPPING CART')
    // })

    //  Component first render once
    // useEffect(() => {
    //     console.log('SHOPPING CART')
    // }, [])

    useEffect(() => {
        console.log('AJAX request, started')
        const timerId = setTimeout(() => {
            console.log('AJAX request, finish')
        }, 3000);
        return () => {
            clearTimeout(timerId)
        }
    }, [])
    return (
        <div className="row">
            <h2>Shopping Cart 🛍</h2>
            <div className='col-12'>
                <ProductTable />
            </div>
        </div>
    )
}