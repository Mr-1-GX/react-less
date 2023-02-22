
import { useState } from 'react'
import productsData from '../../products.json'

export const ProductItem = ({ product }) => {
    return (
        <div>
            <h4>{product.name},  ღირებულება: {product.price}$</h4>
            <h3>
                კატეგორია - {product.category},
            </h3>
            <h4>{product.stock ? 'მარაგშია' : 'არარის'}</h4>
        </div>
    )
}
export const Products = () => {
    const [inSocOnly, setInStockOnly] = useState(false)
    // console.log(productsData)
    // const renderProducts =()=> {
    //     const row =[]
    //     productsData.forEach(product => {
    //         if (product.category !== lastCategory) {

    //         }
    //     })
    // }
    const renderProducts = () => {
        let data = productsData.slice();
        if (inSocOnly) {
            data = productsData.filter((item) => item.stock);
        }
        return data.map((item, index) => {
            return <ProductItem product={item} key={index} />
        })
    }
    return (
        <div className="row shadow m-4 p-3">
            <h2>PRODUCTS</h2>
            <button
                className='btn btn-outline-primary'
                onClick={() => setInStockOnly(!inSocOnly)}
            >
                რამდენი პროდუქტი დარჩა
            </button>
            <hr />
            {renderProducts()}
        </div>
    )
}