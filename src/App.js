import React from 'react'
import './style.sass'
import Card from './Card'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      cards: [
        { value: 'Jake', up: false },
        { value: 'Princess', up: false },
        { value: 'Finn', up: false },
        { value: 'BMO', up: false },
        { value: 'Ice King', up: false }
      ]
    }
  }

  flipCard (index) {
    const cards = this.state.cards
    cards[index].up = !cards[index].up
    this.setState({ cards: cards })
  }

  render () {
    // let cardData = this.state.cards
    const cards = this.state.cards.map((card, index) => {
      return <Card flipCard={this.flipCard.bind(this, index)} {...card} key={index} />
    })
    return <div>
      <h1>Class doing memory____TOGETHHHHHHHER!!!!</h1>
      <main>
        {cards}
      </main>
    </div>
  }
}

export default App
