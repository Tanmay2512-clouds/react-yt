import React from 'react'
import {Bookmark} from 'lucide-react' 
import './index.css'

const App = () => {
  return (
    <div className='Parent'>
      <div className="card">
        <div className="top">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" alt="" srcset="" />
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">

        </div>
        <div className="bottom">

        </div>
      </div>
    </div>
  )
}

export default App