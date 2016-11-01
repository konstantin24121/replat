import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	Home
      </div>
    );
  }
}
