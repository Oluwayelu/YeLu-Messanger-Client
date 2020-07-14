import React from 'react';
import Dropzone from 'react-dropzone';

const FileUpload = ({ upload, children }) => {

  const onDrop = (avatar) => {
    let formData = new FormData()
    const config = {
      header: { 'content-type': 'multipart/form-data' }
    }

    formData.append('avatar', avatar[0])
    console.log(formData)
    upload(formData, config)
  }
  return (
    <Dropzone
      onDrop={onDrop}
      multiple={false}
      maxSize={10 * 1024 * 1024 * 1024}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {children}
        </div>
      )}
    </Dropzone>
  );
};

export default FileUpload;