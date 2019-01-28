import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import {BACKLOG_STATUS, IN_PROGRESS_STATUS, COMPLETED_STATUS} from './constants';
import Lane from './components/Lane/Lane';
import Task from './components/Task/Task';
import CreateTaskForm from './components/Task/CreateTaskForm';

import {startCreateTask, cancelCreateTask, createTask, deleteTask, updateTask} from './actions/taskActions';

// TODO: use sass rather than css
import './App.css';

class App extends Component {
  render() {
    // TODO: target inprogress button css better
    return (
      <div className="App">
        <Lane
          title="Backlog"
        >
          {this.props.backlog.map(task => <Task key={task.id} {...task} />)}
          <div className="lane__actions">
            <button onClick={() => this.props.startCreateTask(BACKLOG_STATUS)}>Create task</button>
          </div>
        </Lane>
        <Lane
          title="In Progress"
        >
          {this.props.inProgress.map(task => <Task key={task.id} {...task} />)}
          <div className="lane__actions lane__actions-inprogress">
            <button onClick={() => this.props.startCreateTask(IN_PROGRESS_STATUS)}>Create task</button>
          </div>
        </Lane>
        <Lane
          title="Completed"
        >
          {this.props.completed.map(task => <Task key={task.id} {...task} />)}
        </Lane>
         <Modal
          isOpen={this.props.modalOpen}
          onRequestClose={this.props.cancelCreateTask}
          contentLabel="Create new task"
        >
          <CreateTaskForm
            onCancel={this.props.cancelCreateTask}
            onSubmit={this.props.activeTask.id ? this.props.updateTask : this.props.createTask}
            startingStatus={this.props.startingTaskStatus}
            {...this.props.activeTask}
            onDelete={this.props.deleteTask}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({taskState, uiState}) => {
  const {tasks} = taskState;
  const {startingTask, activeTask} = uiState;
  const backlog = taskState[BACKLOG_STATUS].map(id => tasks[id]);
  const inProgress = taskState[IN_PROGRESS_STATUS].map(id => tasks[id]);
  const completed = taskState[COMPLETED_STATUS].map(id => tasks[id]);
  const editingTask = activeTask ? tasks[activeTask] : {};
  return {
    backlog,
    inProgress,
    completed,
    modalOpen: !!(startingTask || activeTask),
    startingTaskStatus: startingTask,
    activeTask: editingTask,
  }
};

const mapDispatchToProps = {
  startCreateTask,
  cancelCreateTask,
  createTask,
  deleteTask,
  updateTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
