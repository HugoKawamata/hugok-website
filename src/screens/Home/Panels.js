/* @flow */
import React from "react";

import Panel from "./Panel";

export default class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, flipped: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.drawPanels = this.drawPanels.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (
      (window.innerHeight > window.innerWidth &&
        this.state.height < this.state.width) ||
      // Previous state was desktop, switched to mobile
      (window.innerHeight < window.innerWidth &&
        this.state.height > this.state.width)
      // Previous state was mobile, switched to desktop
    ) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        flipped: 1,
      });
    } else {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        flipped: this.state.flipped,
      });
    }
  }

  drawPanels() {
    let numCols = 0;
    let numRows = 0;
    const listOfRows = [];
    let rowType = "";

    if (this.state.height > this.state.width) {
      // Mobile
      numCols = 12;
      numRows = 24;
      rowType = "mobile-row";
    } else {
      // Desktop
      numCols = 24;
      numRows = 12;
      rowType = "desktop-row";
    }

    for (let rowI = 0; rowI < numRows; rowI++) {
      const rowItems = [];
      for (let colI = 0; colI < numCols; colI++) {
        if (this.state.flipped === 1) {
          rowItems[colI] = (
            <Panel
              key={`col ${colI}, row ${rowI}`}
              col={colI}
              row={rowI}
              className="panel-flipping"
            />
          );
        } else {
          rowItems[colI] = (
            <Panel
              key={`col ${colI}, row ${rowI}`}
              col={colI}
              row={rowI}
              className="panel-unflipped"
            />
          );
        }
      }
      listOfRows[rowI] = (
        <div key={`row ${rowI}`} className={rowType}>
          {rowItems}
        </div>
      );
    }

    return listOfRows;
  }

  render() {
    const panels = this.drawPanels();
    return <div className="panels">{panels}</div>;
  }
}
