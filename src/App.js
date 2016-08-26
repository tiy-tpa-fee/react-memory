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
      matched: [],
      turned: []
    }
  }

  flipCard = (index) => {
    const cards = this.state.cards
    const turned = this.state.turned
    if (turned.length < 2) {
      this.setState({
        turned: turned.concat(index)
      }, () => {
        if (turned.length === 2) {
          if (turned[0] === turned[1]1) {

          }

        }
      })
    }
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
