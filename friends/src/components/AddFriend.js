import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {addFriends} from '../actions';

class AddFriend extends Comment {
  componentdidMount() {
    this.props.addFriends();
  }

  render() {
    return (
      <form>
        <span><input type="text" placeholder="Name"/></span>
        <span><input type="text" placeholder="Age"/></span>
        <span><input type="text" placeholder="Email"/></span>
        <span><input type="submit">Submit</input></span>
      </form>
    )
  }
}