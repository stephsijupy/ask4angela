import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Error from './page/Error'
import RestaurantSignIn from './page/RestaurantSignIn'
import RestaurantListPage from './page/RestaurantListPage'
import UserSignIn from './page/UserSignIn'
import WordGenerator from './page/WordGenerator'

function App() {
  return (
    <Router> s
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/restaurant-sign-in' element={<RestaurantSignIn />} />
            <Route path='/user-sign-in' element={<UserSignIn />} />
            <Route path='/word-generator' element={<WordGenerator />} />
            <Route path='/restaurant-list' element={<RestaurantListPage />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </Router>
  )
}

export default App;