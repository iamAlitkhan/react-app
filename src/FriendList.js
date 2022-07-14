import { Component } from 'react'

class FriendList extends Component {

  render() {

    const friendItems = this.props.friends.map((friend, index) => {
      return <li key = {index}>{friend}</li>
    })

    return (
      <ul>{friendItems}</ul>
    )
  }

}

export default FriendList