import React from "react";

export default class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.textInput = React.createRef();
  }
  handleSubmit = (event) => {
    event.preventDefault();

    if (this.fileInput.current.files[0].size > 10000) {
      alert("Not allowed more than 10KB");
    } else {
      alert("Data Uploaded...");
    }
    //   alert(`selected file - ${this.fileInput.current.files[0].name}`)
  };

  handleChange = (event) => {
    console.log(event);
    console.log(this.textInput);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              ref={this.textInput}
              onChange={this.handleChange}
            />{" "}
          </label>
          <br />
          <br />
          <br />
          <label>
            Upload a file: <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <br />
          <br />
          <button name="submitButton">Submit</button>
        </form>
      </div>
    );
  }
}
