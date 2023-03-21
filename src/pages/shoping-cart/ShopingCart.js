
import { useEffect } from 'react'
import { Loader } from '../../atoms'
import { ProductTable } from '../../components/table'
import { useRequireAuth } from '../../hooks'

export const ShopingCart = () => {
    const auth = useRequireAuth()
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

    if (!auth) {
        return <Loader />
    }

    return (
        <div className="row">
            <h2>Shopping Cart 🛍</h2>
            <div className='col-12'>
                <ProductTable />
            </div>
        </div>
    )
}