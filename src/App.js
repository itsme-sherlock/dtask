import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddToCart from "./components/addToCart/AddToCart";
import Banners from "./components/banners";
import Devices from "./components/devices/devices";
import { useState } from "react";
// import Banner from './components/banner';

function App() {
  const [pricesFromCards, setpricesFromCards] = useState(); // Initialize pricesFromCards state
  console.log("pricesFromCards "+pricesFromCards);
  const getPrice = (price) => {
    setpricesFromCards(price);
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/add-to-cart"
            element={<AddToCart price={pricesFromCards} />}
          />
          <Route
            path="/"
            element={
              <div>
                <Banners />
                <Devices getPrice={getPrice} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
