import React from 'react';

export default class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.flipSelf = this.flipSelf.bind(this);

        this.state = {
            column: props.col, // Out of 24 (or 12 if mobile)
            row: props.row // Out of 12 (or 24 if mobile)
        }
    }

    flipSelf() {
        console.log("flipped")
    }

    render() {

        return (
            <div className="panel-comp" onMouseOver={this.flipSelf} >
            </div>
        );
    }
}
