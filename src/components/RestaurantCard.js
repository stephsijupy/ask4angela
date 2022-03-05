import React from 'react'

const RestaurantCard = (props) => {
    const {id, name, password} = props.restaurant;
    return (
    <div className='item'>
     <div className='content'>
        <div className='header'>{name}</div>
        <div>{password}</div>
     </div>
      <i 
        className='trash alternate outline icon' 
        style={{color: "red", marginTop:"7px"}}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>)
}

export default RestaurantCard
