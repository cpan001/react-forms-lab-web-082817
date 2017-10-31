import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      isValid: false
    };
  }

  checkPoemValid = value => {
    const lines = value.split("\n");
    if (lines.length === 3) {
      let line1 = lines[0].trim().split(/\s+/).length;
      let line2 = lines[1].trim().split(/\s+/).length;
      let line3 = lines[2].trim().split(/\s+/).length;
      if (line1 === 5 && line2 === 3 && line3 === 5) {
        this.setState({ isValid: true });
        return true;
      }
    }
    this.setState({ isValid: false });
    return false;
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
    this.checkPoemValid(e.target.value);
  };

  render() {
    const error = this.state.isValid ? null : (
      <div id="poem-validation-error" style={{ color: "red" }}>
        This poem is not written in the right structure!
      </div>
    );
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {error}
      </div>
    );
  }
}

export default PoemWriter;
