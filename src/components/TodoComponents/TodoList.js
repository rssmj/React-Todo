// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	return (
		<div classname='thingThings'>
			{props.thingList.map(thing => (
				<Todo key={thing.id} thing={thing} toggleThing={props.toggleThing} />
			))}
			<button className='dumpButton' onClick={props.eraseEvidence}>
				BURN THE LIST!
			</button>
		</div>
	);
};

export default TodoList;
