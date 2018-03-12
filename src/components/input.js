import React from 'react';
import './styles.css'

export default class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);

    }

    handleChange(e) {
        console.log("change here: " + e);
        this.setState({value: e.target.value});
    }
    addTodo(todo) {
        console.log("TODO", todo);
        if(todo.length >0) {
            this.props.addTodo(todo);
            this.setState({value: ''});
        }
        
    }

    render() {
        return (
            <div className="container-input">
                <input className="form-control" type="text" value={this.state.value} onChange= {this.handleChange}/>
                <button className="btn btn-success" value="" onClick={() => this.addTodo(this.state.value)}>
                    Submit </button>
            </div>
         );           
    }
}