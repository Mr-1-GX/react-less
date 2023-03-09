
import { Routes as Router, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Products } from './pages/products';
import { ShopingCart } from './pages/shoping-cart';
import { NoMatch } from './pages/NoMatch';

export const Routes = () => {
    return (
        <div className='my-3' style={{ minHeight: '300px' }}>
            <Router>
                <Route path='/' index element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/shoping-cart' element={<ShopingCart />} />
                <Route path='*' element={<NoMatch />} />
            </Router>
        </div>
    )
}

Routes.displayName = 'AppRoutes';