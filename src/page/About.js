import React from 'react'
import '../App.css'
import Header from '../components/Header'
import Design from '../images/design.jpeg'

function About() {
  return (
    <div className='ui container'>
      <Header />
      <div className="ui main">
        <h1 class="ui pink dividing header">Who is Angela?</h1>
          <text style={{fontSize: 18}}>
          The safety initiative <text style={{fontWeight: 'bold'}}>‘Ask for Angela’</text> is being rolled out to bars, clubs and other 
          licensed businesses across London.  
          <p/>
          People who feel unsafe, vulnerable or threatened can 
          discreetly seek help by approaching venue staff and asking them for ‘Angela’. 
          <p/>
          This code-phrase will indicate to staff that they require help with their situation and 
          a trained member of staff will then look to support and assist them. 
          <p/>
          This might be through 
          reuniting them with a friend, seeing them to a taxi, or by calling venue security and/or the police. 
          <p/>
          </text>
          <p/>

          <h1 class="ui pink dividing header">Why the online version?</h1>
          <text style={{fontSize: 18}}>
          If a person is feeling shy, nervous, or feel like they can't talk, it will be more comfortable for 
          them to notify through their phone, rather than in person.
          <p/>
          The staff will see the notification, and come by to confirm who the person is by asking them a question 
          where the person has to incorporate their unique secret word.
          <p/>
          </text>
          <p/>
          <img src={Design} class="ui fluid image" alt="Ask4Angela design"/>
      </div>
    </div>
  )
}

export default About
