
import { useState } from 'react'
// import { debounce } from 'lodash'

import { ProductItem } from './Productitem'
import { Button, TextInput, Form } from '../../atoms'
import { Collapsible } from '../../components/collapsible'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import productsData from '../../products.json'



export const Products = () => {
    const [inStockOnly, setInStockOnly] = useState(false)
    const [filterTerm, setFilterTerm] = useLocalStorage('super-app:shoping-cart', '')
    // console.log(productsData)
    // const renderProducts =()=> {
    //     const row =[]
    //     productsData.forEach(product => {
    //         if (product.category !== lastCategory) {

    //         }
    //     })
    // }

    console.log('__Products Render__')
    const renderProducts = () => {
        let data = productsData.slice();
        if (inStockOnly) {
            data = data.filter((item) => item.stock);
        }
        if (filterTerm && filterTerm.length > 2) {
            data = data.filter((el) => el.name.includes(filterTerm))
        }
        return data.map((item, index) => {
            return <ProductItem product={item} key={index} />
        })
    }
    const handleFilterChange = ({ target }) => {
        setFilterTerm(target.value)
    }
    return (
        <div className="row shadow m-4 p-3">
            <h2>PRODUCTS</h2>
            <Form>
                <div className='mb-3 row'>
                    <div className='col-8'>
                        <TextInput
                            value={filterTerm}
                            placeholder='ძიება'
                            onChange={handleFilterChange}
                        />
                        <h3>
                            💬 {filterTerm}
                        </h3>
                    </div>
                    <div className='col-4'>
                        <Button
                            className='btn btn-outline-primary'
                            type='button'
                            onClick={() => setInStockOnly(!inStockOnly)}
                        >
                            {inStockOnly ? '📊სრული სია' : '💣დარჩა'}
                        </Button>
                    </div>
                </div>
            </Form>
            <hr />
            <Collapsible
                closedTitle='მაჩვენე'
                opendTitle='დამალე'
            >
                <div className='d-flex flex-wrap'>
                    {renderProducts()}
                </div>
            </Collapsible>
        </div>
    )
}