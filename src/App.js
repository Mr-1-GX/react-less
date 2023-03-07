
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/header'
import { Footer } from './components/footer'
import { Layout } from './components/layout';

import { Home } from './pages/home'
import { Products } from './pages/products';
import { CartProvider } from './providers/CartProvider';

import './App.css';

function App() {
  return (
    <CartProvider>
      <Layout className="App">
        <Header />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer />
      </Layout>
    </CartProvider>
  );
}

export default App;
