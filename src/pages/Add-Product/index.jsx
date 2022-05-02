import React from 'react';
import AddProductForm from '../../components/AddProductForm';
import Navbar from '../../components/Navbar';
import './addProduct.scss';

function AddProduct() {
  return (
    <>
      <Navbar />
      <div className="add-product-container">
        <div className="add-product-wrapper">
          <div className="add-product">
            <div className="add-product-content">
              <AddProductForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
