import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'

export default function RestaurantListPage() {
  let restaurants = JSON.parse(localStorage.getItem("restaurants"))
  return (
    <div className='ui container'>
      <Header />
      <div className="ui main">
        THIS IS LIST OF ANGELA SUPPORTED RESTAURANTS
        <RestaurantList restaurants={restaurants}/>
      </div>
    </div>
  )
}
