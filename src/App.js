import React, {Component} from 'react'

import Header from './components/Header'
import Headline from './components/Headline'
import Article from './components/Article'
import CommentsLikes from './components/CommentsLikes'
import './App.css'

class App extends Component {

  render() {
    <h1>HighOnCoding</h1>

    return (
      <>
      <Header />
      <Headline />
      <Article />
      <CommentsLikes />
      </>
    )
  }
}

export default App 


// import React, { Component } from 'react'
// import FriendList from './FriendList'
// import Hello from './Hello'
// import Name from './Name'

// class App extends Component {

//   render() {

//     const friends = ["Alex", "John", "Mary", "John"]

//     return (
//       <>
//       <h1>Hello World</h1>
//       <h2>Second Heading</h2>
//       <FriendList friends = {friends} />
//       <Hello name = 'Mary' age = "45"/>
//       <Hello name = 'John' age = "55"/>
//       <Name lastName = 'Khan' firstName = 'Ali' />
//       </>
//     )
//   }

// }


// export default App