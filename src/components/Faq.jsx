import React from 'react'
import faq from '../assests/faq.svg'
import girl from '../assests/image 8.svg'

const Faq = () => {
  return (
    <div>
      <div class="faqoutbox">
      <img class="faqimg" src={faq} alt=""/>
    <div class="faq">
      <div class="faqbox">
        <div class="faqimgbox">
          <img class="girl" src={girl} alt=""/>
        </div>
        <div class="faqimgbox">
          <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne flush-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  When is the event going to be held on?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <strong>Event will be conducted on 12th of April'23</strong> 
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  What are the problem statements?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <strong>Here you can find your problem statements. <a class="accordian-a" href="https://docs.google.com/document/d/13TGvvpOiSdmlUepKYyrgzrXbrPz4LmOpzmzS-IV4bYU/edit">Click Here</a></strong>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  What are other Event/Project Criterias?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <strong>Here you can find the event/project Criteria. <a class="accordian-a" href="https://docs.google.com/document/d/1bKZ2vnO8RjJhB6bOFSibpslsmvFU4ZHbHAlu0ZQ39Ts/edit?usp=sharing">Click Here</a></strong> 
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  What are the specifications to be kept in the drafted Document?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                <div class="accordion-body">
                  <strong>You can find an overview of the details required in the document. <a class="accordian-a" href="https://docs.google.com/document/d/1EetO4NRgxaDxu6lwKkuq0HmlWpWSCiES/edit">Click Here</a></strong> 
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                 Is it compulsory to have the document in hardcopy?
                  </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                <div class="accordion-body">
                  <strong>Yes!!! you have to bring the document in hardcopy, and submit it on the day of event</strong> 
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                 What is the last date for resgistartion ?
                  </button>
              </h2>
              <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                <div class="accordion-body">
                  <strong>Last date of registation is 3rd April 2023 till 5pm</strong> 
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                 Is there any participation cost?
                  </button>
              </h2>
              <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                <div class="accordion-body">
                  <strong>No!!! there is no participation cost.</strong> 
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Faq
