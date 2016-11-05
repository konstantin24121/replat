import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import * as testActions from 'actions/testAction';

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
        <button onClick={this.props.incrementCounter}>inc</button>
        <button onClick={this.props.decrementCounter}>dec</button>
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
