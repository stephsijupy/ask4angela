import React from 'react'

class AddRestaurant extends React.Component {
  render() {
      return (
          <div className='ui main'>
            <h2>Add Restaurant</h2>
            <form className='ui main'>
              <div className='field'>
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className='field'>
                <label>Password</label>
                <input type="text" name="name" placeholder="Password" />
              </div>
            </form>
          </div>
      )
  }
}

export default AddRestaurant
