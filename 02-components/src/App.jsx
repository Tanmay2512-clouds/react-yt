import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  let name = "Tanmay Chopra"
  return (
    <div>
      <div>
        <p>Hello This is {name}</p>

      </div>
      <div className="card">
        <h1>Tanmay Chopra</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, excepturi.</p>
      </div>
      {Card()}
    </div>
  )
}

export default App