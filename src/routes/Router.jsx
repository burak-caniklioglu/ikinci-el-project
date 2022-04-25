import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from '../pages/Account';
import AddProduct from '../pages/Add-Product';
import Login from '../pages/Login';
import Main from '../pages/Main';
import NotFound from '../pages/Not-Found';
import ProductDetail from '../pages/Product-Detail';
import Register from '../pages/Register';

function Router() {
  return (

    <Routes>
      <Route path="/" element={<Main />} exact />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/myaccount" element={<Account />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default Router;
