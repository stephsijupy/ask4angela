import React from 'react'

const UserCard = (props) => {
    const {id, venue, tableNumber, secretWord} = props.user;
    return (
    <div className='item'>
     <div className='content'>
        <div className='header'>{secretWord}</div>
        <div>{tableNumber}</div>
        <div>{venue}</div>
     </div>
      <i 
        className='trash alternate outline icon' 
        style={{color: "red", marginTop:"7px"}}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>)
}

export default UserCard
