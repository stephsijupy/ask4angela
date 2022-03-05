import React, {useState, useEffect} from 'react'
import '../App.css'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import {useHistory} from 'react-router-dom'

function RestaurantSignIn() {

  let history = useHistory();

  history.push('/restaurant-sign-in')

  const LOCAL_STORAGE_KEY = "restaurants";
  const [restaurants, setRestaurants] = useState([]);
  
  const addRestaurantHandler = (restaurant) => {
    console.log(restaurant);
    setRestaurants([...restaurants, restaurant]);
  };

  const removeRestaurantHandler = (id) => {
    const newRestaurantList = restaurants.filter((restaurant) => {
      return restaurant.id !== id;
    });

    setRestaurants(newRestaurantList);
  };

  useEffect(() => {
    const retriveRestaurants = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveRestaurants) setRestaurants(retriveRestaurants);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(restaurants));
  }, [restaurants]);

  return (
    <div className='ui container'>
      <Header />
      <AddRestaurant addRestaurantHandler={addRestaurantHandler} />
      <RestaurantList restaurants={restaurants} getRestaurantId={removeRestaurantHandler}/>
      <button onClick={history.goBack}>Back</button>
    </div>
  )
}

export default RestaurantSignIn;
