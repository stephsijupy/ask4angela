import React from 'react'

class AddUser extends React.Component {
  state = {
    venue: "",
    tableNumber: "",
    secretWord: ['Wonderful','Marvellous','Beautiful','Great','Good','Amazing','Best','Excellent'][Math.floor(Math.random()*8)]
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.venue === "" || this.state.tableNumber === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addUserHandler(this.state);
    this.setState({ venue: "", tableNumber: "", secretWord: ['Wonderful','Marvellous','Beautiful','Great','Good','Amazing','Best','Excellent'][Math.floor(Math.random()*8)] });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Which restaurant/bar are you at?</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Benue</label>
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={this.state.venue}
              onChange={(e) => this.setState({ venue: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Table Number</label>
            <input
              type="text"
              name="table number"
              placeholder="C418"
              value={this.state.tableNumber}
              onChange={(e) => this.setState({ tableNumber: e.target.value })}
            />
          </div>
          <button className="ui button blue">Next</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
