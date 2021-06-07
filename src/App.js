import React, { Component } from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks'

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Tasks />
      </div>
    )
  }
}

export default App
