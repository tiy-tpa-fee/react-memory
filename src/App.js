import React from 'react'
import './style.sass'
import Card from './Card'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      cards: [
        'Jake',
        'Princess Bubbelgum',
        'Finn',
        'BMO',
        'Ice King',
        'Jake',
        'Princess Bubbelgum',
        'Finn',
        'BMO',
        'Ice King'
      ],
      matched: [5, 8],
      turned: [2]
    }
  }

  flipCard = (index) => {
    const cards = this.state.cards

    this.setState({ cards: cards })
  }

  render () {
    // let cardData = this.state.cards
    const cards = this.state.cards.map((card, index) => {
      const up = (this.state.turned + this.state.matched).includes(index)
      return <Card flipCard={this.flipCard} value={card} up={up} index={index} key={index} />
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
