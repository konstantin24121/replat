import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import * as testActions from 'actions/testAction';

import TestComponent from 'components/TestComponent';

class Home extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
      	Home. Counter from store - {counter}
        <TestComponent name="inc" onClick={this.props.incrementCounter} />
        <TestComponent name="dec" onClick={this.props.decrementCounter} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    counter: state.sample.counter
  };
}

function matchDispatchToProps(dispatch){

}

export default connect(mapStateToProps, testActions)(Home);
