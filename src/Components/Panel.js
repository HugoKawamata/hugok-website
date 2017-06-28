import React from 'react';

export default class Panel extends React.Component {
    constructor() {
        super();
        this.flipSelf = this.flipSelf.bind(this);
    }

    flipSelf() {
        console.log("flipped")
    }

    render() {
        let marginLeftString = this.props.leftCols * (100/8) + "%";
        var marginRightString = this.props.rightCols * (100/8) + "%";

        var margins = {
            marginLeft: marginLeftString,
            marginRight: marginRightString
        };

        return (
            <div className="panel-comp" onMouseOver={this.flipSelf} style={margins}>
            </div>
        );
    }
}
