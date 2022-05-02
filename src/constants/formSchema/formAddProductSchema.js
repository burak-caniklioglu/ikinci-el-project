import * as Yup from 'yup';

const formAddProductSchema = Yup.object().shape({
  name: Yup
    .string()
    .required('Ürün adı boş bırakılamaz.'),
  description: Yup
    .string()
    .required('Ürün açıklaması boş bırakılamaz.'),
  color: Yup
    .string()
    .required('Ürün rengi boş bırakılamaz.'),

});

export default formAddProductSchema;
