import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RestaurantSignIn from './RestaurantSignin'
import RestaurantListPage from './page/RestaurantListPage'
// import UserSignIn from './UserSignin'

export default function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/restaurant-sign-in' component={RestaurantSignIn} />
            <Route exact path='/restaurant-list' component={RestaurantListPage} />
        </Switch>
    </Router>
  )
}
