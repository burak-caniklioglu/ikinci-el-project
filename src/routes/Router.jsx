import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from '../pages/Account';
import AddProduct from '../pages/Add-Product';
import Login from '../pages/LoginRegister';
import Main from '../pages/Main';
import NotFound from '../pages/Not-Found';
import ProductDetail from '../pages/Product-Detail';
import PrivateRouter from './PrivateRouter';

function Router() {
  return (

    <Routes>
      <Route path="/" element={<Main />} exact />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      <Route element={<PrivateRouter />}>
        <Route path="/myaccount" element={<Account />} />
        <Route path="/productdetail/:id" element={<ProductDetail />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Route>

    </Routes>

  );
}

export default Router;
