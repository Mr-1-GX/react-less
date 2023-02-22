
import { Header } from './components/header'
import { Footer } from './components/footer'

import { Home } from './pages/home'
import { Products } from './pages/products';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
