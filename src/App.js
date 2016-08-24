import React from 'react'
import './style.sass'

class App extends React.Component {

  render () {
    return <div>
      <h1>MINION MEMORY</h1>
      <main>
        <div className='card up'>GREY</div>
        <div className='card up'>BLUE</div>
        <div className='card up'>PURPLE</div>
        <div className='card up'>HOT-PINK</div>
        <div className='card down'>BANANAS</div>
      </main>
    </div>
  }
}

export default App
