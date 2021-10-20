import React from "react";
import PropTypes from "prop-types";
import Checkmark from "./Checkmark";
import "../css/todo.css";

/* Componente Funcional : Stateless */
function Todo(props) {
  return (
    <div className={`list-item ${props.done ? "done" : ""}`}>
      {props.title}
      <div className="is-pulled-right">
        <Checkmark toggleFn={props.toggleFn} done={props.done} />
        <button
          className="delete is-pulled-right"
          onClick={(e) => props.deleteFn(e)}
        />
      </div>
    </div>
  );
}

/* Declaración de una class en React : Stateful */
/* class Todo extends React.Component {
  
  // Siempre en la clases debe retornar un render () con su return()
  render () {
    return (
      <div className={`list-item ${this.props.done ? 'done' : ''}`}>
        {this.props.title}
        <div className="is-pulled-right">
          <Checkmark done={this.props.done} />
          <button className="delete is-pulled-right" />
        </div>
      </div>
    )
  }
} */

/* Definimos las propiedades (props) que se estan usando 
en el componente con su tipo específico. */
Todo.propTypes = {
  deleteFn: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleFn: PropTypes.func.isRequired
};

/* Exportamos la class */
export default Todo;
