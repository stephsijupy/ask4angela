import React from 'react'
import '../App.css'
import Header from '../components/Header'
import { useNavigate, useParams } from 'react-router-dom'

function WordGenerator() { 
  // var keyword = localStorage.getItem("users");
  let navigate = useNavigate();
  let { secretWord } = useParams();
  
  return (
    <div className='ui  container'>
        <Header />
        <div className="ui main">
        <h2 class="ui  center aligned header">Remember and use this keyword!</h2>
        <h1 class="ui  center aligned pink header">Keyword: Wondeful{secretWord}</h1>
        <h3 class="ui  center aligned header">The question would be: How was your day?</h3> 
        {/* 
            <h2>Remember and use this keyword!</h2>
            <p/>
            <h1>Keyword: {keyword}</h1>
            <p/>
            <h3>The question would be: How was your day?</h3>
         */}
        </div>
    </div>
  )
}

export default WordGenerator
