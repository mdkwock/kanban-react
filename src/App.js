import React, { Component } from 'react';

import {BACKLOG_STATUS, IN_PROGRESS_STATUS, COMPLETED_STATUS} from './constants';
import Lane from './Lane';
import Task from './Task';

import './App.css';

const task = {
  title: 'test',
  description: 'my description',
  dueDate: '2017-05-15T08:30:00',
  status: BACKLOG_STATUS,
}

const testData = [
  task,
];

class App extends Component {
  render() {
    const tasks = testData;
    const backlog = tasks.filter(task => task.status === BACKLOG_STATUS);
    const inProgress = tasks.filter(task => task.status === IN_PROGRESS_STATUS);
    const completed = tasks.filter(task => task.status === COMPLETED_STATUS);
    return (
      <div className="App">
        <Lane
          title="Backlog"
        >
          {backlog.map(task => <Task {...task} />)}
        </Lane>
        <Lane
          title="In Progress">
        </Lane>
          {inProgress.map(task => <Task {...task} />)}
        <Lane
          title="Completed">
          {completed.map(task => <Task {...task} />)}
        </Lane>
      </div>
    );
  }
}

export default App;
