import React from 'react';
import './Sponsor.css'
import heading from '../assests/supported by.png';
import title from '../assests/bronze sponsor.png';
import logo from '../assests/NetWeb-Logo-SVG (1).png'

const Sponsor = () => {
  return (
    <div>
        <div className='sponsorContainer'>
            <div className='abc'>
                <img className='sponsorHeading' src={heading} alt=""/>
            </div>
            <div className='abc'>
            <img className='sponsorHeading' src={title} alt=""/>
            </div>
            <div className='sponsorImg'>
              <img className='logo' src={logo} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Sponsor
