import React, {useState} from "react";
import PropTypes from "prop-types";

/* Componente Funcional : Stateless */
function Form(props) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTaskFn(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        onChange={handleChange}
        placeholder="Agrega una tarea"
        value={value}
      />
      <button className="button">Enviar</button>
    </form>
  );
}

/* Componente de Clase : Stateful */
/* class Form extends React.Component {
  state = { value: "" };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTaskFn(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input"
          onChange={this.handleChange}
          placeholder="Agrega una tarea"
          value={this.state.value}
        />
        <button className="button">Enviar</button>
      </form>
    );
  }
} */

/* Es para definir a que equivale cada prop */
Form.propTypes = {
  addTaskFn: PropTypes.func.isRequired,
};

export default Form;
