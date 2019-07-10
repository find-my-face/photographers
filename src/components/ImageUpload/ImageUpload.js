import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";

class ImageUpload extends Component {
  state = {
    loading: false,
    image: "",
    imageURL: "",
    progress: 0
  };

  render() {
    return (
      <div>
        <FileUploader />
      </div>
    );
  }
}

export default ImageUpload;
