import React, { Component } from "react";
import { render } from "react-dom";

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepper: 10
    };
  }

  changeUp = (event) => {
    // console.log("Up");
    this.setState({ stepper: this.state.stepper + 1 });
  };

  changeDown = (event) => {
    this.setState({ stepper: this.state.stepper - 1 });
  };

  render() {
    return (
      <div>
        <button type="submit" onClick={this.changeUp}>
          &#8593;
        </button>
        <form>
          <label>
            <input
              type="number"
              min="0"
              max="100"
              value={this.state.stepper}
              readOnly
            />
          </label>
        </form>
        <button type="submit" onClick={this.changeDown}>
          &darr;
        </button>
      </div>
    );
  }
}
export default Step;
