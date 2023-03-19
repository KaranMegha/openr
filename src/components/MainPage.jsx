import React from 'react'
import openr from '../assests/open-r.png'
import country from '../assests/Code for country side.svg'
import registration from '../assests/registration.svg'
import logo from '../assests/Union (1).png'

function MainPage() {
  return (
    <div>
            <div className="main">
              <div className="nav">
                <img className='logo' src={logo} alt="/"/>
              </div>
              <div className="homepage"> 
                <img className='openr' src={openr} alt=''></img>
              </div>
              <div className="sideline">
                <img className="country" src={country} alt="" srcset=""/>
              </div>
              <div className="registration">
                <a className="registration-link" href="https://lu.ma/Open-R"><img className='registration-link' src={registration} alt="" srcset=""/></a>
              </div>
    </div>
    </div>
  )
}

export default MainPage
