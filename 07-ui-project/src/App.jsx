import React from 'react'
import Section1 from './components/section1/section1'
const App = () => {
  
  const users = [
    {
      img:'https://i.pinimg.com/736x/a2/3c/2f/a23c2ffbdc9eff8cc0c0bf3065831d81.jpg',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://i.pinimg.com/736x/8b/7f/ed/8b7fedd1ded0f87698a6716dad652c71.jpg',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://i.pinimg.com/736x/7b/fe/83/7bfe83704540586589a1837018637a2f.jpg',
      intro:'',
      tag:'Underbanked'
    }

  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  )
}

export default App