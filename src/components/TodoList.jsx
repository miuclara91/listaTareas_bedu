import React from "react";
import PropTypes from 'prop-types';
import Todo from "./Todo";
import "../css/todolist.css";

function TodoList(props) {
  return (
    <div className="list-wrapper">
      {
        props.tasks.map((e, i) => 
          <Todo
            key={i}
            done={e.done}
            title={e.title} 
          />
        )
      }
    </div>
  );
}

/* Es para definir a que equivale cada prop */
TodoList.propTypes = {
  tasks: PropTypes.array
}

TodoList.defaultProps = {
  tasks: []
}

export default TodoList;
