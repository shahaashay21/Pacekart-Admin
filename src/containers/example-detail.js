import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExampleDetail extends Component {

    render() {
        if(!this.props.activeExample){
            return <div>Select an example</div>
        }

        return (
        <div>
            <h3>Details for: </h3>
            <div>{this.props.activeExample.title}</div>
        </div>
        );
    }
}

function mapStateToProps({activeExample}) {
    return {
        activeExample
    };
}

export default connect(mapStateToProps)(ExampleDetail);