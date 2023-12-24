import * as React from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Hoodies from "./pages/Hoodies";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from "./pages/Cart";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Hoodies" element={<Hoodies/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Product/:id" element={<Product/>} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;