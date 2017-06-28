import React from 'react';

export default class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.flipSelf = this.flipSelf.bind(this);
        this.setState = this.setState.bind(this);

        this.state = {
            column: props.col, // Out of 24 (or 12 if mobile)
            row: props.row, // Out of 12 (or 24 if mobile)
            delay: (props.row * 2 + props.col) * 120,
            className: "panel-comp panel-unflipped"
        }
        setTimeout(() => this.flipSelf(), 1000+this.state.delay);
    }

    flipSelf() {
        this.setState(
            {
                column: this.state.column,
                row: this.state.row,
                delay: this.state.delay,
                className: "panel-comp panel-flipping"
            }
        );
        setTimeout(() => this.finishFlip(), 500)

    }

    finishFlip() {
        console.log("to");
        this.setState(
            {
                column: this.state.column,
                row: this.state.row,
                delay: this.state.delay,
                className: "panel-comp panel-flipped"
            }
        )
    }

    render() {
        return (
            <div className={this.state.className} >
            </div>
        );
    }
}
