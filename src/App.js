import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddToCart from './components/addToCart/AddToCart';
import Banners from './components/banners';
import Devices from './components/devices/devices';
import { useState } from 'react';
// import Banner from './components/banner';

function App() {
  const [cartItems, setCartItems] = useState(); // Initialize cartItems state

  const addToCart = (price) => {
    setCartItems(price);
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/add-to-cart" element={<AddToCart price={cartItems}/>} />
          <Route path="/" element={<Devices addToCart={addToCart}/>} />
          <Route path="/" element={<Banners />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
