import React from 'react';
import { Button, Upload, message } from 'antd';
import propTypes from 'prop-types';
import 'antd/dist/antd.css';
import './imageUploader.scss';
import UploadIcon from '../../constants/icons/Upload';

const MAX_FILE_SIZE = 400000; // 400KB
const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];

function ImageUploader({ handlePreview, handleUpload, disabled }) {
  const beforeUpload = (file) => {
    const isAllowedType = ALLOWED_TYPES.includes(file.type);
    if (!isAllowedType) {
      message.error('Sadece PNG ve JPEG formatında dosya yükleyebilirsiniz!');
      return Upload.LIST_IGNORE;
    }

    const isWithinSizeLimit = file.size < MAX_FILE_SIZE;
    if (!isWithinSizeLimit) {
      const fileSizeKB = (file.size / 1024).toFixed(0);
      message.error(
        `Dosya boyutu çok büyük (${fileSizeKB}KB). Maksimum dosya boyutu 400KB olmalıdır.`,
      );
      return Upload.LIST_IGNORE;
    }

    return false;
  };

  return (
    <div className="uploader-container">
      <div className="uploader-wrapper">
        <h1>Ürün Görseli</h1>
        <Upload.Dragger
          listType="picture"
          maxCount={5}
          onPreview={handlePreview}
          onChange={handleUpload}
          beforeUpload={beforeUpload}
          showUploadList={{ showRemoveIcon: true }}
          accept=".png, .jpg, .jpeg"
          disabled={disabled}
          progress={{
            strokeWidth: 3,
            format: (percent) => `${percent}%`,
            strokeColor: '#4B9CE2',
          }}
        >
          <div className="uploader-content">
            <UploadIcon />
            <br />
            Sürükleyip bırakarak yükle veya
            <br />
            <Button className="uploader-content-button">Click Upload</Button>
          </div>
          <div className="uploader-info-warning">
            PNG ve JPEG Dosya boyutu max. 400kb
          </div>
        </Upload.Dragger>
      </div>
    </div>
  );
}
ImageUploader.propTypes = {
  handlePreview: propTypes.func.isRequired,
  handleUpload: propTypes.func.isRequired,
  disabled: propTypes.bool,
};

ImageUploader.defaultProps = {
  disabled: false,
};
export default ImageUploader;
