import React, {PureComponent} from 'react';

class CreateTaskForm extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {

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
		const status = this.props.startingStatus;
		this.props.onSubmit({...this.state, status});
	}
	render() {
		const {
			onCancel,
		} = this.props;
		return (
			<div>
				<label>Title</label>
				<input name="title" type="text" value={this.state['title']} placeholder="Title" onChange={this.handleInputChange} />
				<label>Description</label>
				<textarea name="description" value={this.state['description']} placeholder="Description (optional)"  onChange={this.handleInputChange}  />
				<label>Due Date</label>
				<input name="dueDate" type="date" value={this.state['dueDate']} placeholder="Due on"  onChange={this.handleInputChange}  />
				<button onClick={this.props.onCancel}>Cancel</button>
				<button onClick={this.handleFormSubmit}>Create</button>
			</div>
		)
	}
}
export default CreateTaskForm;