import React from 'react'
import About from '../assests/about.svg'

function Aboutus() {
  return (
        <div className="aboutus">
      <div className="about-heading">
        <img className="aboutusimg" src={About} alt="" srcset=""/>
        <div className="about-detail">
          <p>This event is a type of open project / prototype challenge
            based on the theme “RURAL DEVELOPMENT”, which focuses
            on development of innovative ideas and amusing technical
            projects that play a crucial role in the category of “Smart
            Village” and also making new and feasible ideas that benefit
            Rural residents .</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
