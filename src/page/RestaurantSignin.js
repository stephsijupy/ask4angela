import React, {useState, useEffect} from 'react'
import '../App.css'
import { v4 as uuidv4 } from "uuid";
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'

function RestaurantSignIn() {
  const LOCAL_STORAGE_KEY = "restaurants";
  const [restaurants, setRestaurants] = useState([]);
  
  const addRestaurantHandler = (restaurant) => {
    console.log(restaurant);
    setRestaurants([...restaurants, { id: uuidv4(), ...restaurant }]);
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
      {/* <RestaurantList restaurants={restaurants} getRestaurantId={removeRestaurantHandler}/> */}
    </div>
  )
}

export default RestaurantSignIn;
