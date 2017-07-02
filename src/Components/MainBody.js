import React from 'react';

import Hero from './Hero';
import Panels from './Panels';


export default class MainBody extends React.Component {

    render() {
        var page;
        switch(this.props.current) {
            case "about":
                page = (
                    <div className="main-body">
                        <Hero />
                        <Panels />
                    </div>
                );
                break;
        }
        return page;
    }
}