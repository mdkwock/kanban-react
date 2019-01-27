import {START_CREATE_TASK, CANCEL_CREATE_TASK, CREATE_TASK} from '../actions/taskActions';

const initialState = {
	startingTask: false
}

const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_CREATE_TASK: 
			return ({
				...state,
				startingTask: action.status,
			});
		case CANCEL_CREATE_TASK:
		case CREATE_TASK: {
			return ({
				...state,
				startingTask: false,
			});
		}
		default:
			return state;
	}
}

export default uiReducer;