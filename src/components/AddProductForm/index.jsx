import { Formik } from 'formik';
import React from 'react';
import useBrands from '../../hooks/useBrands';
import useCategories from '../../hooks/useCategories';
import useColor from '../../hooks/useColor';
import useUsingStatus from '../../hooks/useUsingStatuses';
import formAddProductSchema from '../../constants/formSchema/formAddProductSchema';
import DropdownItems from '../Dropdown/DropdownItems';
import ImageUploder from '../ImageUploader';
import './addProductForm.scss';

function AddProductForm() {
  const [, categories] = useCategories();
  const brands = useBrands();
  const colors = useColor();
  const usingStatuses = useUsingStatus();
  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        category: '',
        brand: '',
        color: '',
        usingStatus: '',

      }}
      validationSchema={formAddProductSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        handleChange,
        errors,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="add-product-content-wrapper">
          <div>
            <div className="add-product-content-detail">
              <h1>Ürün Detayları</h1>
              <div className="form-row">
                <label htmlFor="name">
                  Ürün Adı

                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Örnek: Iphone 12 Pro Max"
                  maxLength="100"
                  className={errors?.name ? 'not-valid' : ''}
                />
              </div>
              <div className="form-row">
                <label htmlFor="description">
                  Açıklama

                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Ürün açıklaması giriniz"
                  value={values.description}
                  maxLength="500"
                  onChange={handleChange}
                  className={errors?.description ? 'not-valid' : ''}
                />
              </div>

              <div className="form-row-multi">
                <div className="input-group">
                  <label htmlFor="category"> Kategori</label>
                  <DropdownItems
                    options={categories}
                    placeholder="Kategori Seç"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="brand">
                    Marka
                  </label>
                  <DropdownItems
                    options={brands}
                    placeholder="Marka Seç"
                  />
                </div>
              </div>
              <div className="form-row-multi">
                <div className="input-group">
                  <label htmlFor="color">Renk</label>
                  <DropdownItems
                    options={colors}
                    placeholder="Renk Seç"
                  />
                  <span>{errors.color}</span>
                </div>
                <div className="input-group">
                  <label htmlFor="status">Kullanım Durumu</label>
                  <DropdownItems
                    options={usingStatuses}
                    placeholder="Kullanım Durumunu Seç"
                  />
                </div>
              </div>

              <div className="form-row price-row">
                <label htmlFor="price">
                  Fiyat
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className={errors?.price ? 'not-valid' : 'price'}
                    placeholder="Bir fiyat girin"
                    value={values.price}
                    onChange={handleChange}
                  />

                </label>
                <p className={errors?.price ? 'not-valid-ico' : ''}>TL</p>
                {errors?.price && (
                <span>Bir fiyat girin. </span>
                )}
              </div>
              <div className="form-row offer-row">
                {values.isOfferable ? (
                  <label htmlFor="offeropt" className="offeropt-active">
                    Fiyat ve teklif Opsiyonu
                    {' '}
                  </label>
                ) : (
                  <label htmlFor="offeropt" className="offeropt">
                    Teklif Opsiyonu
                    {' '}
                  </label>
                )}
                {/* <ToggleSwitch value={values.isOfferable} onChange={handleChange} /> */}
              </div>
              <ImageUploder />
              <button type="submit">
                Kaydet
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>

  );
}

export default AddProductForm;
