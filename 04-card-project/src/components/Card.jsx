import React from 'react'
import {Bookmark} from 'lucide-react' 

const Card = (props) => {
    console.log(props.company);
    
  return (
    <div className="card">
        <div className="top">
          <img className="logo" src={props.brandLogo} alt="" srcset="" />
          <button className='logo2'>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>5 days ago</span></h3>
          <h2>{props.post}</h2>
          <div className="center2">
            <h4 className="c21">{props.tag1}</h4>
            <h4 className="c22">{props.tag2}</h4>
          </div>

        </div>
        <div className="bottom">
          <div className="b1">
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button className="b2">Apply Now</button>
        </div>
      </div>
  )
}

export default Card