import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from '../pages/Account';
import AddProduct from '../pages/Add-Product';
import Login from '../pages/LoginRegister';
import Main from '../pages/Main';
import NotFound from '../pages/Not-Found';
import ProductDetail from '../pages/Product-Detail';

function Router() {
  return (

    <Routes>
      <Route path="/" element={<Main />} exact />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />
      <Route path="/myaccount" element={<Account />} />
      <Route path="/productdetail/:id" element={<ProductDetail />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default Router;
