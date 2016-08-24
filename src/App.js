import React from 'react'
import './style.sass'
import Card from './Card'

class App extends React.Component {

  render () {
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
