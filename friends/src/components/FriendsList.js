import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import axios from 'axios';

class FriendsList extends Component {
  componentDidMount(){
    this.props.getFriends();
  }
  render(){
    return (
      <div>
        { this.props.friends.map((friend, i) => {
          return (
            <div key={i}>
              <div>{ `friend ${i+1}` }</div>
              <div>{`name: ${friend.name}`}</div>
              <div>{`age: ${friend.age}`}</div>
              <div>{`email: ${friend.email}`}</div>
            </div>
          );
        })
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  }
}


export default connect(mapStateToProps, { getFriends })(FriendsList); 