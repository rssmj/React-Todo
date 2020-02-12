import React from 'react';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			newThing: ''
		};
	}

	handleChanges = e => {
		this.setState({
			newThing: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.addNewThing(this.state.newThing);
		this.setState({ newThing: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					name='newThing'
					value={this.state.newThing}
					onChange={this.handleChanges}
				/>
				<button className='thingsThingsThings'>New Things!</button>
			</form>
		);
	}
}

export default TodoForm;
