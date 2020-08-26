import React, { Component } from "react";

class CreateProject extends Component {
  state = {
    ComplainCity: "",
    ComplainType: "",
    ComlainTitle: "",
    content: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onCreateType = (e) => {
    this.setState({ ComplainType: e.target.value });
  };
  onCreateTitle = (e) => {
    this.setState({ ComlainTitle: e.target.value });
  };
  onCreateContent = (e) => {
    this.setState({ content: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="gray-text text-darken-3">Add Complain</h5>
          <div className="input-field">
            <label>City</label>
            <input
              type="text"
              id="city_text"
              onChange={this.onCreateTitle}
            ></input>
          </div>
          <div className="input-field">
            <label>Complain Type</label>
            <input
              type="text"
              id="type_text"
              onChange={this.onCreateTitle}
            ></input>
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
export default CreateProject;
