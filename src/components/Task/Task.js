import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {editTask} from '../../actions/taskActions';
import TaskButtons from './TaskButtons';
import Date from '../Date/Date';
import {COMPLETED_STATUS} from '../../constants';

import './Task.css';

// TODO: make onclick easier for user to identify
const Task = ({
	title,
	id,
	description,
	dueDate,
	completedDate,
	status,
	editTask,
}) => (
	<div className="task">
		<div className="task__content" onClick={()=> editTask(id)}>
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

const mapStateToProps = () => ({});
const mapDispatchToProps = {
	editTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);