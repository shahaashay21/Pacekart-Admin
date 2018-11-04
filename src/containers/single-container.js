import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import selectExample from '../actions/index';

class SingleContainer extends Component {
    renderList(){
        return (
            this.props.examples.map(example => {
                return (
                    <li
                    onClick={() => this.props.selectExample(example)}
                    key={example.title}
                    className='list-group-item'>
                        {example.title}
                    </li>
                )
            })
        )
    }

    render() {
        return (
            <div>
                <ul className='list-group md-4'>
                    { this.renderList() }
                </ul>
                <Link to = "/hello">Hello</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        examples: state.example
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators ( {selectExample: selectExample}, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleContainer);