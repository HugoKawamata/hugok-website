import React from 'react'

import Panel from './Panel'

export default class Panels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numCols: 5,
            numRows: 5
        }
    }



    render() {
        return (
            <div className="panels">
                <div className="rows row0">
                    <Panel leftCols={7} rightCols={0} />
                </div>
                <div className="rows row1">
                    <Panel leftCols={5} rightCols={0} />
                    <Panel leftCols={0} rightCols={1} />
                </div>
                <div className="rows row2">
                    <Panel leftCols={1} rightCols={0} />

                    <Panel leftCols={2} rightCols={0} />
                    <Panel leftCols={0} rightCols={0} />
                    <Panel leftCols={0} rightCols={1} />
                </div>
                <div className="rows rows3">
                    <Panel leftCols={3} rightCols={0} />
                    <Panel leftCols={0} rightCols={0} />
                    <Panel leftCols={0} rightCols={2} />
                </div>
                <div className="rows rows4">
                    <Panel leftCols={2} rightCols={0} />
                    <Panel leftCols={0} rightCols={0} />
                    <Panel leftCols={0} rightCols={3} />

                </div>
                <div className="rows rows5">
                    <Panel leftCols={1} rightCols={0} />
                    <Panel leftCols={0} rightCols={0} />
                    <Panel leftCols={0} rightCols={2} />

                    <Panel leftCols={0} rightCols={1} />
                </div>
                <div className="rows rows6">
                    <Panel leftCols={1} rightCols={0} />
                    <Panel leftCols={0} rightCols={5} />
                </div>
                <div className="rows rows7">
                    <Panel leftCols={0} rightCols={7} />
                </div>

            </div>
        );
    }
}