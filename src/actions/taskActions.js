export const MOVE_TASK = 'MOVE_TASK';
export const CREATE_TASK = 'CREATE_TASK';
export const START_CREATE_TASK = 'START_CREATE_TASK';
export const CANCEL_CREATE_TASK = 'CANCEL_CREATE_TASK';

export const moveTask = (id, startStatus, endStatus) => ({
	type: MOVE_TASK,
	id,
	startStatus,
	endStatus,
})

export const startCreateTask = (status) => ({
	type: START_CREATE_TASK,
	status,
});

export const cancelCreateTask = () => ({
	type: CANCEL_CREATE_TASK,
});

export const createTask = (task, status) => ({
	type: CREATE_TASK,
	task,
});