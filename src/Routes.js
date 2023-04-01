
import { lazy, Suspense } from 'react'
import { Routes as Router, Route } from 'react-router-dom'

import { Loader } from './atoms'
import { Layout } from './components/layout'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Register } from './pages/register'
import Profile from './pages/profile'
import { NoMatch } from './pages/NoMatch'
import * as routes from './utils/routPaths'


const Products = lazy(() => import('./pages/products'))
const ShopingCart = lazy(() => import('./pages/shoping-cart'))

export const Routes = () => {
    return (
        <Router>
            <Route element={<Layout />}>
                <Route path={routes.HOME_PATH} index element={<Home />} />
                <Route path={routes.PRODUCTS_PATH} element={
                    <Suspense fallback={<Loader massage='Product Loading...' />}>
                        <Products />
                    </Suspense>
                } />
                <Route path={routes.SHOPNG_CART_PATH} element={
                    <Suspense fallback={<Loader massage='Card Loading...' />}>
                        <ShopingCart />
                    </Suspense>
                } />
                <Route path={routes.PROFILE_PATH} element={<Profile title='Page Title' />} />
                <Route path={routes.LOGIN_PATH} element={<Login />} />
                <Route path={routes.REGISTER_PATH} element={<Register />} />
                <Route path={routes.NO_MATCH_PATH} element={<NoMatch />} />
            </Route>
        </Router>
    )
}

Routes.displayName = 'AppRoutes';