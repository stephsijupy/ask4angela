import React from 'react'
import './App.css'
import AngelaList from './components/AngelaList'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <AngelaList />
      <input type="text" />
      <button>Ask For Angela</button>
      <button>Sign in/ Sign up</button>
      <button>I am Angela</button>
    </div>
  )
}

export default App;
