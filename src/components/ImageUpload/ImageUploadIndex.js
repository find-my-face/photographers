import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { withAuthorisation } from "../Session/SessionIndex";

class ImageUpload extends Component {
  state = {
    loading: false,
    filenames: [],
    downloadURLs: [],
    progress: 0
  };

  render() {
    return (
      <div>
        <FileUploader
          accept="image/*"
          name="image"
          storageRef={firebase.storage().ref("Photographers/Photographer1")}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          multiple
        />
      </div>
    );
  }

  handleUploadStart = event => {
    this.setState({ loading: true, progress: 0 });
  };

  handleUploadError = error => {
    this.setState({ loading: false });
    console.error(error);
  };

  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL();

    this.setState(prevState => ({
      filenames: [...prevState.filenames, filename],
      downloadURLs: [...prevState.downloadURLs, downloadURL],
      progress: 100,
      loading: false
    }));
  };
}

const condition = authUser => !!authUser;

export default withAuthorisation(condition)(ImageUpload);
