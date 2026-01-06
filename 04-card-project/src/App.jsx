import React from 'react'
import {Bookmark} from 'lucide-react' 
import './index.css'

const App = () => {
  return (
    <div className='Parent'>
      <div className="card">
        <div className="top">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" alt="" srcset="" />
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/Ux designer</h2>
          <div className="center2">
            <h4 className="c21">Part-time</h4>
            <h4 className="c22">Senior level</h4>
          </div>

        </div>
        <div className="bottom">
          <div>
            <h3>$120/HR</h3>
            <p>Mumbai, India</p>
            <button>Apply Now</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App