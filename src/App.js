import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const thingsTodo = [
	{
		thing: 'walk doggo',
		id: 0,
		ruined: false
	},
	{
		thing: 'launder garments',
		id: 4,
		ruined: false
	},
	{
		thing: 'acquire groceries',
		id: 1,
		ruined: false
	},
	{
		thing:
			'Well, its a mess, what a mess. What you gonna do? Youre going to take out your Suck It and you suck it! Suck it! Yeah, take out your Suck It and you suck it!',
		id: 7859544947739,
		ruined: false
	},
	{
		thing: 'dont set stuff on fire',
		id: 22,
		ruined: false
	},
	{
		thing: 'bees',
		id: 12,
		ruined: false //maybee? possibee?
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			thingList: thingsTodo
		};
	}

	toggleThing = thingID => {
		this.setState({
			thingList: this.state.thingList.map(thing => {
				if (thing.id === thingID) {
					thing.ruined = !thing.ruined;
				}
				return thing;
			})
		});
	};

	addNewThing = thingText => {
		this.setState({
			thingList: [
				...this.state.thingList,
				{
					thing: thingText,
					id: Date.now(),
					ruined: false
				}
			]
		});
	};

	eraseEvidence = () => {
		this.setState({
			thingList: this.state.thingList.filter(thing => {
				if (thing.ruined === false) {
					return { thing };
				}
			})
		});
	};

	render() {
		return (
			<div className='App'>
				<div>
					<h1 className='thingsHeader'>
						Oh would you look at that TODO List! Just look at it!
					</h1>
				</div>

				<TodoList
					thingList={this.state.thingList}
					toggleThing={this.toggleThing}
				/>
				<TodoForm
					addNewThing={this.addNewThing}
					eraseEvidence={this.eraseEvidence}
				/>
			</div>
		);
	}
}

export default App;


