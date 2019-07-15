import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { withAuthorisation } from "../Session/SessionIndex";
import TextField from "@material-ui/core/TextField";

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
          <TextField
            id="standard-name"
            label="Album Name"
            onChange={this.handleChange}
            margin="normal"
          />

          <label
            style={{
              backgroundColor: "steelblue",
              color: "white",
              padding: 10,
              borderRadius: 4,
              pointer: "cursor"
            }}
          >
            Choose images
            <FileUploader
              hidden
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
          </label>
        </form>
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
