import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Lütfen geçerli bir email adresi giriniz.')
    .required('Eposta alanı zorunludur.'),
  password: Yup
    .string()
    .typeError('Her karakteri kullanamazsınız.')
    .min(8, 'En az 8 karakter olmalıdır.')
    .max(32, 'En fazla 32 karakter olmalıdır.')
    .required('Şifre alanı zorunludur.'),

});

export default formSchema;
