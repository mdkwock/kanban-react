import React from 'react';
import {BACKLOG_STATUS, IN_PROGRESS_STATUS, COMPLETED_STATUS} from './constants';

const TaskButtons = ({
	status
}) => {
	switch (status) {
		case IN_PROGRESS_STATUS:
			return (<div><button>Backlog</button><button>Complete</button></div>);
		case COMPLETED_STATUS:
			return (<div><button>Undo</button></div>);
		case BACKLOG_STATUS:
		default:
			return (<div><button>Start</button></div>);
	}
};

export default TaskButtons;