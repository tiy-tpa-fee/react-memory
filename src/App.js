import React from 'react'
import './style.sass'
import Card from './Card'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      cards: [
        { value: 'Jake', up: true },
        { value: 'Princess', up: false },
        { value: 'Finn', up: true },
        { value: 'BMO', up: false }
      ]
    }
  }
  render () {
    let cardData = this.state.cards
    let test = cardData.map()
    return <div>
      <h1>Class doing memory____TOGETHHHHHHHER!!!!</h1>
      <main>
        <Card value="Jake" up={true} />
        <Card value="Princess" up={false} />
        <Card value="Finn" up={true} />
        <Card value="BMO" up={false} />
      </main>
    </div>
  }
}

export default App
