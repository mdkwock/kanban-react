import React from 'react';

const Task = ({
	title,
	description,
	dueDate,
	onCancel,
	onCreate,
	onInputChange,
}) => (
	<div>
		<input name="title" type="text" value={title} placeholder="Title" onChange={(ev) => onInputChange(ev.target.name, ev.target.value)} />
		<textarea name="description" value={description} placeholder="Description (optional)"  onChange={(ev) => onInputChange(ev.target.name, ev.target.value)}  />
		<input name="dueDate" type="date" value={dueDate} placeholder="Due on"  onChange={(ev) => onInputChange(ev.target.name, ev.target.value)}  />
		<button onClick={onCancel}>Cancel</button>
		<button onClick={onCreate}>Create</button>
	</div>
);