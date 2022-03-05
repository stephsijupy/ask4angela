import React from 'react'

class guestForm extends React.Component {
	state = {
		venue: "",
		tableNum: "",
	};

	render() {
		return (
			<div className='ui main'>
				<h2>A4A Request</h2>
				<form>
					<div className="field">
						<label for="venue">Which restaurant/bar are you at?:</label>
						
						<select name="venue" id="venue">
						  <option value="568">568</option>
						  <option value="metric">Metric</option>
						  <option value="unionBar">Union Bar</option>
						</select>
					</div>
					<div className="field">
						<label for="tableNum">What's your table number?:</label>
				
						<input type="number" id="tableNum" name="tableNum" />
						<br />
					</div>
					<button className="ui button blue">Ask for Angela</button>
				</form>
			</div>
		);
	}
}

export default guestForm;