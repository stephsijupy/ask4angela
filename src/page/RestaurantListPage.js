import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header'
import restaurants from '../components/RestaurantSignin.restaurants'
import removeRestaurantHandler from '../components/RestaurantSignin.removeRestaurantHandler'

export default function RestaurantListPage() {
  let history = useHistory();

  history.push('/restaurant-list')

  return (
    <div className='ui container'>
        <Header />
        <RestaurantList restaurants={restaurants} getRestaurantId={removeRestaurantHandler}/>
        <button onClick={history.goBack}>Back</button>
  </div>
  )
}
