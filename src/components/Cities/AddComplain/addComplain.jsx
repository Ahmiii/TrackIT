import React, { Component } from "react";
import { connect } from "react-redux";
import { addComplain } from "../../../store/actions/addComplainAction";
import firebase from "../../../config/firebaseConfig";
import { Redirect } from "react-router-dom";

class AddComplain extends Component {
  state = {
    city: "",
    complainType: "",
    title: "",
    content: "",
    image: null,
    url: "",
    status: "Submitted",
  };

  onCreateCity = (e) => {
    this.setState({ city: e.target.value });
  };

  onCreateType = (e) => {
    this.setState({ complainType: e.target.value });
  };
  onCreateTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  onCreateContent = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addComplains(this.state);
    this.props.history.push("/");
  };
  handleImageAsFile = (e) => {
    const image = e.target.files[0];
    this.setState({ image });
  };

  handleUploadImage = () => {
    const { image } = this.state;
    var storageRef = firebase.storage().ref(`images/${image.name}`);
    var task = storageRef.put(image);
    task.on(
      "state_changed",
      function progress(snapshot) {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      function error(err) {
        console.log(err);
      },
      function complete() {
        firebase
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {},
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     firebase
    //       .storage()
    //       .ref("image")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then((url) => {
    //         console.log(url);
    //         this.setState({ url });
    //       });
    //   }
    // );
  };

  render() {
    console.log(this.state.image);
    const complainTypes = ["Complaint", "Crime Report", "Missing Report"];
    const uploadImage = [];
    const { authentication, Cities } = this.props;

    if (!authentication.uid) {
      return <Redirect to="/Signin" />;
    }
    if (
      this.state.complainType === "Crime Report" ||
      this.state.complainType === "Missing Report"
    ) {
      uploadImage.push(
        <>
          <input type="file" onChange={this.handleImageAsFile}></input>
          <button onClick={this.handleUploadImage}>upload</button>
        </>
      );
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="gray-text text-darken-3">Add Complain</h5>
          <label>City</label>

          <select onChange={this.onCreateCity} style={{ display: "block" }}>
            <option value="">Select City</option>
            {Cities.map((city, index) => {
              return (
                <option
                  //selected={index === 0 ? "selected" : ""}
                  value={city.title}
                >
                  {city.title}
                </option>
              );
            })}
          </select>
          {/* <input
              type="text"
              id="city_text"
              onChange={this.onCreateCity}
            ></input> */}

          <div style={{ paddingTop: "10px" }}>
            <label>Complain Type</label>
            <select onChange={this.onCreateType} style={{ display: "block" }}>
              <option value="">Select Complain Type</option>
              {complainTypes.map((type) => {
                return <option value={type}>{type}</option>;
              })}
            </select>
            {uploadImage}

            {/* <input
              type="text"
              id="type_text"
              onChange={this.onCreateType}
            ></input> */}
          </div>
          <div className="input-field">
            <label>Title</label>
            <input
              type="text"
              id="title_text"
              onChange={this.onCreateTitle}
            ></input>
          </div>

          <div className="input-field">
            <label>Content</label>
            <input
              type="text"
              id="content_title"
              onChange={this.onCreateContent}
            ></input>
          </div>
          <div className="input-field">
            <button className="btn gray lighten-1 z-depth-0">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Cities: state.complain.complainCities,
    authentication: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComplains: (complain) => dispatch(addComplain(complain)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComplain);
