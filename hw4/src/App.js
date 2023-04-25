import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import NotImplemented from "./containers/NotImplemented/NotImplemented";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Products from "./containers/Products/Products";
import Details from "./containers/Details/Details";
import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";
function App() {
  const [cart, setCart] = useState([]);
  const [index, setIndex] = useState(0);
  return (
    <Router>
      <div className="App">
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/not_implemented" element={<NotImplemented />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/detail/:name"
            element={
              <Details
                cart={cart}
                setCart={setCart}
                index={index}
                setIndex={setIndex}
              />
            }
          />
          <Route
            path="/cart"
            element={<ShoppingCart cart={cart} setCart={setCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
