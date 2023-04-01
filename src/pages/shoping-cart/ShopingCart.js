
import { useEffect } from 'react'
import { Loader } from '../../atoms'
import { ProductTable } from '../../components/table'
import { useRequireAuth } from '../../hooks'

export const ShopingCart = () => {
    const auth = useRequireAuth()
    useEffect(() => {
        console.log('AJAX request, started')
        const timerId = setTimeout(() => {
            console.log('AJAX request, finish')
        }, 5000);
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