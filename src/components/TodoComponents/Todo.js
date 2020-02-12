import React from 'react';

const Todo = props => {
	return (
		<div
			onClick={() => props.toggleThing(props.thing.id)}
			className={`thing${props.thing.ruined ? ' ruined' : ''}`}
		>
			<p>{props.thing.thing}</p>
		</div>
	);
};

export default Todo;
