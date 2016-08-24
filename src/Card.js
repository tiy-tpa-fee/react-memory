import React from 'react'

class Card extends React.Component {

  render () {
    const direction = this.props.up ? 'up' : 'down'
    return <div className={`card ${direction}`}>{this.props.value}</div>  
  }
}

export default Card
