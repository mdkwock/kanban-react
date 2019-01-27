import React from 'react';
import {connect} from 'react-redux';

import {BACKLOG_STATUS, IN_PROGRESS_STATUS, COMPLETED_STATUS} from '../../constants';
import {moveTask} from '../../actions/taskActions';

import './TaskButtons.css';

const TaskButtons = ({
	status,
	id,
	moveTask,
}) => {
	switch (status) {
		// TODO: refactor so not duplicated code
		case IN_PROGRESS_STATUS:
			return (
				<div className="task-buttons task-buttons--inprogress">
					<button onClick={() => moveTask(id, status, BACKLOG_STATUS)}>Backlog</button>
					<button onClick={() => moveTask(id, status, COMPLETED_STATUS)}>Complete</button>
				</div>
			);
		case COMPLETED_STATUS:
			return (
				<div className="task-buttons task-buttons--completed">
					<button onClick={() => moveTask(id, status, IN_PROGRESS_STATUS)}>Undo</button>
				</div>
			);
		case BACKLOG_STATUS:
		default:
			return (
				<div className="task-buttons task-buttons--backlog">
					<button onClick={() => moveTask(id, status, IN_PROGRESS_STATUS)}>Start</button>
				</div>
			);
	}
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
	moveTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskButtons);