import React from 'react';
import PropTypes from 'prop-types';

import TaskButtons from './TaskButtons';
import Date from './Date';

import './Task.css';

const Task = ({
	title,
	description,
	dueDate,
	completedDate,
	status,
}) => (
	<div className="task">
		<div className="task__content">
			<h4>{title}</h4>
			<p className="task__description">{description}</p>
			<Date date={completedDate || dueDate} />
		</div>
		<TaskButtons status={status}/>
	</div>
);

Task.propTypes = {
	status: PropTypes.number,
}

Task.defaultProps = {
	status: 1,
}

export default Task;