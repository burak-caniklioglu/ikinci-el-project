const getApiOrigin = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  if (!apiUrl) {
    return '';
  }

  try {
    return new URL(apiUrl).origin;
  } catch (error) {
    return '';
  }
};

const resolveRelativeUrl = (url) => {
  if (!url || typeof url !== 'string') {
    return '';
  }

  const isAbsolute = /^(https?:)?\/\//i.test(url) || url.startsWith('data:') || url.startsWith('blob:');
  if (isAbsolute) {
    return url;
  }

  const origin = getApiOrigin();
  if (!origin) {
    return url;
  }

  return `${origin}${url.startsWith('/') ? '' : '/'}${url}`;
};

const pickBestFormatUrl = (image) => image?.formats?.small?.url
  || image?.formats?.medium?.url
  || image?.formats?.thumbnail?.url
  || image?.url;

function getImageUrl(image) {
  if (!image || image === 'null') {
    return '';
  }

  if (typeof image === 'string') {
    return resolveRelativeUrl(image);
  }

  if (Array.isArray(image) && image.length > 0) {
    return getImageUrl(image[0]);
  }

  if (typeof image === 'object') {
    if (image.secure_url) {
      return resolveRelativeUrl(image.secure_url);
    }

    const bestFormat = pickBestFormatUrl(image);
    return resolveRelativeUrl(bestFormat);
  }

  return '';
}

export default getImageUrl;
