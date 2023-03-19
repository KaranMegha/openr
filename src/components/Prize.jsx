import React from 'react'
import a from '../assests/1.svg'
import b from '../assests/2.svg'
import c from '../assests/3.svg'
import d from '../assests/4.svg'
import e from '../assests/5.svg'

const Prize = () => {
  return (
      <div className="prize">
      <div className="prize-heading">
        <h1>Prizes</h1>
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
