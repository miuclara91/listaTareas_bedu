import React, { useState, useEffect } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Form from "./Form";
import ShowHide from "./ShowHide";

/* Component Functional */
function App() {
  const [todos, setTodos] = useState([]);
  const [allFilter, setAllFilter] = useState([]);
  const [allTodos, setAllTodos] = useState(true);

  useEffect(() => {
    setTodos([
      { title: "Sesión 1 (JSX)", done: true },
      { title: "Sesión 2 (Estado y propiedades)", done: true },
      { title: "Sesión 3 (Ciclo de vida)", done: true },
      { title: "Sesión 4 (Hooks)", done: false },
      { title: "Sesión 5 (Hooks)", done: false },
      { title: "Sesión 6 (Rutas)", done: false },
      { title: "Sesión 7 (PWA)", done: false },
      { title: "Sesión 8 (Material UI)", done: false },
    ]);
    setAllFilter([
      { title: "Sesión 1 (JSX)", done: true },
      { title: "Sesión 2 (Estado y propiedades)", done: true },
      { title: "Sesión 3 (Ciclo de vida)", done: true },
      { title: "Sesión 4 (Hooks)", done: false },
      { title: "Sesión 5 (Hooks)", done: false },
      { title: "Sesión 6 (Rutas)", done: false },
      { title: "Sesión 7 (PWA)", done: false },
      { title: "Sesión 8 (Material UI)", done: false },
    ]);
  }, []);

  const handleClickDelete = (e, index) => {
    /* Como buena práctica creamos una copia de array con el spread operator */
    const newTodos = [...todos];

    /* Eliminamos el elemento del array seleccionado */
    newTodos.splice(index, 1);

    /* Actualizamos el estado con el array modificado */
    setTodos(newTodos);
  };

  const handleClickToggleDone = (e, index) => {
    /* Como buena práctica creamos una copia de array con el spread operator */
    const newTodos = [...todos];

    /* Con esto modificamos el done del todo seleccionado, siendo el contrario */
    newTodos[index].done = !newTodos[index].done;

    /* Actualizamos el estado con el array modificado */
    setTodos(newTodos);
  };

  /* Función para validar que no exista una tarea repetida */
  const taskRepeated = (task) => {
    const newTodos = [...todos];
    const found = newTodos.find((newTodos) => task === newTodos.title);
    return found;
  };

  /* Método para agregar una nueva tarea */
  const addTask = (title) => {
    if (taskRepeated(title)) {
      return alert("Esta tarea ya está escrita");
    }

    /* El método concat() se usa para unir dos o más arrays. Este método no 
    cambia los arrays existentes, sino que devuelve un nuevo array. */
    setTodos(todos.concat([{ title, done: false }]));
  };

  /* Función para filtrar sólo las tareas finalizadas */
  const tasksDone = () => {
    const allTasks = [...todos];
    const allDone = allTasks.filter( allTasks => allTasks.done);
    return allDone;
  };

  /* Método para Mostrar / Esconder tareas */
  const ShowAndHide = () => {
    const allTasks = [...todos];
    
    if(allTodos){
      console.log(allTodos);
      setAllFilter(tasksDone());
      setAllTodos(false);      
    } else {
      console.log(allTodos);
      setAllFilter(todos.slice(0));
      setAllTodos(true);      
    }
  }

  return (
    <div className="wrapper">
      <div className="card frame">
        <Header counter={allFilter.length} doneFn={ShowAndHide} />
        
        <TodoList
          tasks={allFilter}
          toggleFn={handleClickToggleDone}
          deleteFn={handleClickDelete}
        />
        <Form addTaskFn={addTask} />
      </div>
    </div>
  );
}

/* class App extends React.Component {
  state = { todos: [] };

  componentDidMount() {
    this.setState({
      todos: [
        { title: "Sesión 1 (JSX)", done: true },
        { title: "Sesión 2 (Estado y propiedades)", done: true },
        { title: "Sesión 3 (Ciclo de vida)", done: true },
        { title: "Sesión 4 (Hooks)", done: false },
        { title: "Sesión 5 (Hooks)", done: false },
        { title: "Sesión 6 (Rutas)", done: false },
        { title: "Sesión 7 (PWA)", done: false },
        { title: "Sesión 8 (Material UI)", done: false },
      ],
      showButton: false,
    });
  }

  handleClickDelete = (e, index) => {
    // Como buena práctica creamos una copia de array con el spread operator 
    const todos = [...this.state.todos];

    // Eliminamos el elemento del array seleccionado 
    todos.splice(index, 1);

    // Actualizamos el estado con el array modificado 
    this.setState({ todos: todos });
  };

  handleClickToggleDone = (e, index) => {
    // Como buena práctica creamos una copia de array con el spread operator 
    const todos = [...this.state.todos];

    // Con esto modificamos el done del todo seleccionado, siendo el contrario 
    todos[index].done = !todos[index].done;

    // Actualizamos el estado con el array modificado 
    this.setState({ todos });
  };

  // Función para validar que no exista una tarea repetida 
  taskRepeated = (task) => {
    const todos = [...this.state.todos];
    const found = todos.find(todos => task === todos.title); 
    return found;
  }

  // Método para agregar una nueva tarea 
  addTask = (title) => {

    if(this.taskRepeated(title)){
      return alert("Esta tarea ya está escrita");
    }

    // El método concat() se usa para unir dos o más arrays. Este método no 
    // cambia los arrays existentes, sino que devuelve un nuevo array.   
    this.setState({
      todos: this.state.todos.concat([{ title, done: false }]),
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Header counter={this.state.todos.length} />
          <TodoList
            tasks={this.state.todos}
            toggleFn={this.handleClickToggleDone}
            deleteFn={this.handleClickDelete}
          />
          <Form addTaskFn={this.addTask} />
        </div>
      </div>
    );
  }
} */

export default App;
