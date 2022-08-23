import * as React from "react";
import { Link } from "react-router-dom";
import ImageWrapper from "./ImageWrapper";

interface State {
  color: string;
  type: string;
  addon: string;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: "Blue",
      type: "Van",
      addon: "Yes"
    };
  }

  public render() {
    return (
      <React.Fragment>
        <div className="p-container">
          <div className="container">
            <label>Color</label>
            <select
              value={this.state.color}
              onChange={(e) => this.setState({ color: e.target.value })}
            >
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
            </select>
          </div>
          <div className="container">
            <label>Vehicle Type</label>
            <select
              value={this.state.type}
              onChange={(e) => this.setState({ type: e.target.value })}
            >
              <option value="Truck">Truck</option>
              <option value="Van">Van</option>
            </select>
          </div>
          <div className="container">
            <label>Camper-Addon</label>
            <select
              value={this.state.addon}
              onChange={(e) => this.setState({ addon: e.target.value })}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="vehicle">
          <ImageWrapper
            type={this.state.type}
            color={this.state.color}
            addon={this.state.addon}
          />

          <Link
            to={`/details/${this.state.color}/${this.state.type}/${this.state.addon}`}
          >
            Submit
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
