import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { withAuthorisation } from "../Session/SessionIndex";

class ImageUpload extends Component {
  state = {
    loading: false,
    files: [],
    downloadURLs: [],
    progress: 0,
    albumName: ""
  };

  render() {
    const { albumName } = this.state;
    const userID = firebase.auth().currentUser.uid;
    return (
      <div>
        <form>
          <label>Album Name</label>
          <input type="text" onChange={this.handleChange} />
        </form>
        <FileUploader
          accept="image/*"
          name="image"
          storageRef={firebase
            .storage()
            .ref(`Photographers/${userID}/${albumName}`)}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          multiple
        />
      </div>
    );
  }

  handleChange = event => {
    this.setState({ albumName: event.target.value });
  };

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
      files: [...prevState.files, filename],
      downloadURLs: [...prevState.downloadURLs, downloadURL],
      progress: 100,
      loading: false
    }));
  };
}

const condition = authUser => !!authUser;

export default withAuthorisation(condition)(ImageUpload);
