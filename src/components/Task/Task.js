import React from 'react';
import PropTypes from 'prop-types';

import TaskButtons from './TaskButtons';
import Date from '../Date/Date';
import {COMPLETED_STATUS} from '../../constants';

import './Task.css';

const Task = ({
	title,
	id,
	description,
	dueDate,
	completedDate,
	status,
}) => (
	<div className="task">
		<div className="task__content">
			<h4>{title}</h4>
			<p className="task__description">{description}</p>
			<Date date={completedDate || dueDate} completed={status===COMPLETED_STATUS} />
		</div>
		<TaskButtons status={status} id={id} />
	</div>
);

Task.propTypes = {
	status: PropTypes.string,
}

Task.defaultProps = {
	status: 'backlog',
}

export default Task;