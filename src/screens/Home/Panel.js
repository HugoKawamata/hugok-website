/* @flow */
import React from "react";

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.flipSelf = this.flipSelf.bind(this);
    this.setState = this.setState.bind(this);

    this.state = {
      column: props.col, // Out of 24 (or 12 if mobile)
      row: props.row, // Out of 12 (or 24 if mobile)
      delay: (props.row * 2 + props.col) * 80,
      className: `panel-comp ${props.className}`,
      mounted: false,
    };

    if (this.state.className === "panel-comp panel-unflipped") {
      setTimeout(() => this.flipSelf(), 1000 + this.state.delay);
    }
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
  }

  flipSelf() {
    if (this.state.mounted === true) {
      this.setState({
        column: this.state.column,
        row: this.state.row,
        delay: this.state.delay,
        className: "panel-comp panel-flipping",
      });
    }
  }

  render() {
    return <div className={this.state.className} />;
  }
}
