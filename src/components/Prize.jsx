import React from 'react'
import a from '../assests/Group 144.png'
import b from '../assests/Group 145.png'
import c from '../assests/Group 146.png'
import d from '../assests/Group 147.png'
import e from '../assests/Group 148.png'
import prize from '../assests/prizes.png'

const Prize = () => {
  return (
      <div className="prize">
      <div className="prize-heading">
        <img className="prizeheadingimg" src={prize} alt=''/>
      </div>
      <div className="prizes">
        <img className="prizeImg" src={a} alt=""/>
        <img className="prizeImg" src={b} alt=""/>
      </div>
      <div className="prizes">
        <img className="prizeImg" src={c} alt=""/>
      </div>
      <div className="prizes">
        <img className="prizeImg" src={d} alt=""/>
        <img className="prizeImg" src={e} alt=""/>
      </div>

    </div>
  )
}

export default Prize
