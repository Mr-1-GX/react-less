
import { lazy, Suspense } from 'react';
import { Routes as Router, Route } from 'react-router-dom'

import { Loader } from './atoms';
import { Home } from './pages/home'
import { NoMatch } from './pages/NoMatch';

const Products = lazy(() => import('./pages/products'))
const ShopingCart = lazy(() => import('./pages/shoping-cart'))

export const Routes = () => {
    return (
        <div className='my-3' style={{ minHeight: '300px' }}>
            <Router>
                <Route path='/' index element={<Home />} />
                <Route path='/products' element={
                    <Suspense fallback={<Loader massage='Product Loading...' />}>
                        <Products />
                    </Suspense>
                } />
                <Route path='/shoping-cart' element={
                    <Suspense fallback={<Loader massage='Card Loading...' />}>
                        <ShopingCart />
                    </Suspense>
                } />
                <Route path='*' element={<NoMatch />} />
            </Router>
        </div>
    )
}

Routes.displayName = 'AppRoutes';