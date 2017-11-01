import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {addFriend} from '../actions';

class AddFriend extends Component {
  componentdidMount() {
    this.props.addFriend();
  }

  render() {
    return (
      <form onSubmit = {addFriend()}>
        <input id="name" type="text" placeholder="Name"/>
        <input type="text" placeholder="Age"/>
        <input type="text" placeholder="Email"/>
        <input type="submit"/>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { addFriend })(AddFriend);
