import React from 'react'
import './style.sass'
import Card from './Card'
const SHOW_CARD = 2000

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
      turned: [],
      win: false
    }
  }

  flipCard = (index) => {
    const { turned, cards } = this.state
    if (turned.length < 2) {
      this.setState({
        turned: turned.concat(index)
      }, () => {
        if (this.state.turned.length === 2) {
          if (cards[this.state.turned[0]] === cards[this.state.turned[1]]) {
            this.setState({
              matched: this.state.matched.concat(...this.state.turned),
              turned: []
            }, () => {
              if (this.state.matched.length === cards.length) {
                this.setState({ win: true })
              }
            })
          } else {
            setTimeout(() => {
              this.setState({ turned: [] })
            }, SHOW_CARD)
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
    if (!this.state.win) {
      return <div>
        <h1>Class doing memory____TOGETHHHHHHHER!!!!</h1>
        <main>
          {cards}
        </main>
      </div>
    } else {
      return <div>
        <h1> YOU WIN!!! </h1>
      </div>
    }
  }
}

export default App
