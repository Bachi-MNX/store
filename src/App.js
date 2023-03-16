import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Navbar from './Navbar';
import Searchpage from './Searchpage';
import ProductList from './ProductList';
import Details from './Details';
import ByCategory from './ByCategory';
import Login from './Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Searchpage />} />
          <Route path="/category" element={<ByCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
