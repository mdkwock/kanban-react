import {MOVE_TASK, CREATE_TASK} from '../actions/taskActions';
import {BACKLOG_STATUS, IN_PROGRESS_STATUS, COMPLETED_STATUS} from '../constants';

const task = {
  id: 1,
  title: 'test',
  description: 'my description',
  dueDate: '2017-05-15T08:30:00',
  status: IN_PROGRESS_STATUS,
}

const initialState = {
	tasks: {1: task},
	[BACKLOG_STATUS]: [],
	[IN_PROGRESS_STATUS]:[1],
	[COMPLETED_STATUS]: [],
}

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case MOVE_TASK: {
			const {id, startStatus, endStatus} = action;
			// remove the id from the startStatus
			const startLane = [
				...state[startStatus].slice(0,state[startStatus].indexOf(id)),
				...state[startStatus].slice(state[startStatus].indexOf(id)+1),
			];
			const endLane = [
				...state[endStatus],
				id,
			];
			const tasks = {
				...state.tasks,
				[id]: {
					...state.tasks[id],
					status: endStatus
				},
			};
			return {
				...state, 
				tasks: tasks,
				[startStatus]: startLane,
				[endStatus]: endLane,
			};
		}
		case CREATE_TASK: {
			const {task} = action;
			const id = Object.keys(state.tasks).length + 1;
			task['id'] = id;
			const status = task.status;
			const lane = [
				...state[status],
				id,
			]
			const tasks = {
				...state.tasks,
				[id]: task,
			};
			return {
				...state, 
				tasks: tasks,
				[status]: lane
			};
		}
		default:
			return state;
	}
}

export default taskReducer;