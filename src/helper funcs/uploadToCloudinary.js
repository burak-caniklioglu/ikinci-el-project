const CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

const getUploadEndpoint = () => {
  if (!CLOUDINARY_CLOUD_NAME) {
    throw new Error('Cloudinary cloud name eksik. REACT_APP_CLOUDINARY_CLOUD_NAME ayarlayin.');
  }

  return `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
};

async function uploadToCloudinary(file) {
  if (!file) {
    throw new Error('Yuklenecek dosya bulunamadi.');
  }

  if (!CLOUDINARY_UPLOAD_PRESET) {
    throw new Error('Cloudinary upload preset eksik. REACT_APP_CLOUDINARY_UPLOAD_PRESET ayarlayin.');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  const response = await fetch(getUploadEndpoint(), {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  if (!response.ok) {
    const reason = result?.error?.message || 'Cloudinary yukleme hatasi.';
    throw new Error(reason);
  }

  if (!result?.secure_url) {
    throw new Error('Cloudinary secure_url donmedi.');
  }

  return result.secure_url;
}

export default uploadToCloudinary;
