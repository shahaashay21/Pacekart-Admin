import React, { Component } from 'react';

import SingleContainer from './single-container';
import DetailContainer from './example-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <SingleContainer />
        <DetailContainer />
      </div>
    );
  }
}