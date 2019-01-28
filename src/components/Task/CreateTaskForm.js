import React, {PureComponent} from 'react';

class CreateTaskForm extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			...props
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	handleInputChange(event) {
		const {name, value} = event.target;
		this.setState({
			[name]: value,
		});
	}
	handleFormSubmit(){
		const status = this.props.startingStatus || this.state.status;
		this.props.onSubmit({...this.state, status});
	}
	render() {
		const {
			onCancel,
			onDelete,
		} = this.props;
		// TODO: use a date picker library, with maybe some mobile support for switching to normal
		return (
			<div className="task-form">
				<div>
					<label>Title:</label>
					<input name="title" type="text" value={this.state['title']} placeholder="Title" onChange={this.handleInputChange} />
				</div>
				<div>
					<label>Description:</label>
					<textarea name="description" value={this.state['description']} placeholder="Description (optional)"  onChange={this.handleInputChange}  />
				</div>
				<div>
					<label>Due Date:</label>
					<input name="dueDate" type="date" value={this.state['dueDate']} placeholder="Due on"  onChange={this.handleInputChange}  />
				</div>
				<div className="task-form__actions">
					{this.state.id && <button className="delete" onClick={() => onDelete(this.state.id)}>Delete</button>}
					<a href="#" onClick={onCancel}>Cancel</a>
					<button onClick={this.handleFormSubmit}>{this.state.id ? 'Edit' : 'Create'}</button>
				</div>
			</div>
		)
	}
}
export default CreateTaskForm;