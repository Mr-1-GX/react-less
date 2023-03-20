
import { CartProvider } from './providers/CartProvider';
import { Routes } from './Routes'

import './App.css';

function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}

export default App;
