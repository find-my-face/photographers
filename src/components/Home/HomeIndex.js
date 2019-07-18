import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { withAuthorisation } from "../Session/SessionIndex";
import { TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import logo from "../../assets/DarkFMF.png";

import Photographer from "../../assets/fest2.jpg";

const styles = theme => ({
  header: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontSize: 100,
    color: "white"
  },
  input: {
    color: "white"
  }
});

class ImageUpload extends Component {
  state = {
    loading: false,
    files: [],
    downloadURLs: [],
    progress: 0,
    albumName: ""
  };

  render() {
    // const classes = withStyles();
    const { classes } = this.props;
    const { albumName } = this.state;
    const userID = firebase.auth().currentUser.uid;
    return (
      <div>
        <img className="logo" src={logo} alt="logo" width="25%" height="25%" />
        <img
          className="photographerContainer"
          src={Photographer}
          alt="photographer"
          width="100%"
        />

        <div className="uploadImageForm">
          <Typography className="uploadText" variant="h4">
            Upload images:
          </Typography>
          <br />
          <form>
            <TextField
              id="standard-name"
              label="Album Name"
              onChange={this.handleChange}
              margin="normal"
              InputProps={{ input: classes.input }}
              variant="filled"
              color="white"
            />

            <label
              style={{
                backgroundColor: "steelblue",
                color: "white",
                padding: 40,
                borderRadius: 4,
                pointer: "cursor",
                fontSize: "1.15em"
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
          <br />
        </div>
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

export default withAuthorisation(condition)(withStyles(styles)(ImageUpload));
