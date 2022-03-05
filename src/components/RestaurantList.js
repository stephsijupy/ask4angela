import React from 'react'
import RestaurantCard from "./RestaurantCard"


const RestaurantList = (props) => {
  console.log(props);

  const deleteRestaurantHandler = (id) => {
    props.getRestaurantId(id);
  };

  const renderRestaurantList = props.restaurants.map((restaurant) => {
    return (
      <RestaurantCard 
        restaurant={restaurant} 
        clickHandler={deleteRestaurantHandler}
        key={restaurant.id}></RestaurantCard>
    )
  })

  return (
    <div className='ui celled list'>
      {renderRestaurantList}
    </div>
  );
}

export default RestaurantList;