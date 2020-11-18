import React, { Component } from "react";
import FriendCard from "./FriendCard";
import Wrapper from "./Wrapper";
import Title from "./Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    friendsFound: [],
  };


  handleClick = (friend_id) => {

    if (this.state.friendsFound.includes(friend_id)) {
      this.setState({score:0});
      this.setState({friendsFound: []});
      alert("Game over!");
  
    }
    else {
      this.setState({score: this.state.score +1, friendsFound: [...this.state.friendsFound, friend_id] });
      console.log(this.state.friendsFound);
    }
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let friends = this.state.friends.sort(() => Math.random() - .5);
    // Set this.state.friends equal to the new friends array
    this.setState({friends: friends });
    console.log(this.state.score)
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.friends)
    return (
      <Wrapper>
        <Title score={this.state.score}>Memory Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            onClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
