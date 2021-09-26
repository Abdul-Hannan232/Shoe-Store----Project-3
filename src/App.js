import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import About from "./Components/About"
import Products from "./Components/Products"
import ProductsIndex from "./Components/ProductsIndex"
import ProductsItem from "./Components/ProductsItem"


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          <Route path="/products/" element={<ProductsIndex />} />
          <Route path="/products/:item" element={<ProductsItem />} />
        </Route>
        <Route exact path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
