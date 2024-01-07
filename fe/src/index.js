// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home/Home";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<Home />}>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProductList from './Pages/ProductList/ProductList';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import SingleProduct from './Pages/SingleProduct/SingleProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/product/" element={<ProductList />} />
        <Route path="/product/view/" element={<SingleProduct />} />
        <Route path="/cart/" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
