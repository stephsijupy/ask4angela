import React from 'react'
import '../App.css'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'

function Home() {
  let navigate = useNavigate();

  return (
    <div className='ui container'>
      <Header />
      <div className="ui main">
      </div>
      <button className="ui button circular fluid massive pink" onClick={() => navigate('/user-sign-in')}>ASK4ANGELA</button>
      <p/>
      <button className="ui button circular fluid huge teal" onClick={() => navigate('/restaurant-sign-in')}>Restaurant Sign-in</button>
    </div>
  )
}

export default Home
