import React from 'react'

import Panel from './Panel'

export default class Panels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0}
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.drawPanels = this.drawPanels.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    drawPanels() {
        var numCols = 0;
        var numRows = 0;
        var listOfRows = [];
        var rowType = "";

        if (this.state.height > this.state.width) {
            // Mobile
        } else {
            // Desktop
            numCols = 24;
            numRows = 12;
            rowType = "desktop-row";
        }

        for (let rowI = 0; rowI < numRows; rowI++) {
            var rowItems = []
            for (let colI = 0; colI < numCols; colI++) {
                rowItems[colI] = <Panel key={"col " + colI + ", row " + rowI} col={colI} row={rowI}>{colI + "col, " + rowI + "row"}</Panel>
            }
            listOfRows[rowI] = <div key={"row " + rowI} className={rowType}>{rowItems}</div>;
        }

        return listOfRows;
    }


    render() {
        var panelsHeight = {height: (this.state.width / 2) + "px"}
        return (
            <div className="panels" >
                {this.drawPanels()}
            </div>
        );
    }
}