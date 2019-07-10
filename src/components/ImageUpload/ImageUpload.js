import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";
import { withAuthorisation } from "../Session/SessionIndex";

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
        <FileUploader
          accept="images/*"
          name="image"
          storageRef={firebase.storage().ref('photographersimages')}
          onUploadStart={this.handleUploadStart}
          onUploadSuccess={this.handleUploadSuccess}
        />
      </div>
    );
  }

  handleUploadStart = event => {
    this.setState({ loading: true, progress: 0 })
  }

  handleUploadSuccess = filename => {
    this.setState({ image: filename, progress: 100, loading: false })
    firebase
      .storage()
      .ref("photographersimages")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  }

}

const condition = authUser => !!authUser;

export default withAuthorisation(condition)(ImageUpload);
