import {START_CREATE_TASK, CANCEL_CREATE_TASK, CREATE_TASK, EDIT_TASK, DELETE_TASK, UPDATE_TASK} from '../actions/taskActions';

const initialState = {
	startingTask: null,
	activeTask: null,
}

const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_CREATE_TASK: 
			return {
				...state,
				startingTask: action.status,
			};
		case UPDATE_TASK: 
		case DELETE_TASK:
		case CANCEL_CREATE_TASK:
		case CREATE_TASK: {
			return {
				...state,
				startingTask: null,
				activeTask: null,
			};
		}
		case EDIT_TASK: 
			return {
				...state,
				activeTask: action.taskId,
			}	
		default:
			return state;
	}
}

export default uiReducer;