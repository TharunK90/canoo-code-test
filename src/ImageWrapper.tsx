import * as React from "react";

interface props {
  color: string;
  type: string;
  addon: string;
}

class ImageWrapper extends React.PureComponent<props, {}> {
  public render() {
    const { color, addon, type } = this.props;
    return (
      <React.Fragment>
        {addon === "Yes" && (
          <div
            className="camper"
            style={{ marginBottom: type === "Van" ? -59 : -29 }}
          ></div>
        )}
        {type === "Van" ? (
          <img className={color} alt={type} src="/van.svg" width="200" />
        ) : (
          <img className={color} alt={type} src="/truck.svg" width="200" />
        )}
      </React.Fragment>
    );
  }
}

export default ImageWrapper;
