import React from 'react'

class AddRestaurant extends React.Component {

  state = {
    name: "",
    password: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.password === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addRestaurantHandler(this.state);
    this.setState({ name: "", password: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Restaurant</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddRestaurant;
