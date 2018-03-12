import React from 'react';

export default class todoItem extends React.Component {
    constructor(props) {
        super(props);
        
    }
    removeTodo(id) {
        this.props.removeTodo(id);
    }
    render() {
        return (
            <div className="container-item">
                <button className="btn btn-primary" onClick={(e)=> this.removeTodo(this.props.id)}>remove</button> 
                <p>{this.props.todo.text}</p>
                <button type="button" className="btn btn-primary">
                Editar
                </button>

            </div>
         );           
    }
}