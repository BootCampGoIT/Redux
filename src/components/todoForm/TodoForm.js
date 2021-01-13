import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../../redux/actions/todoActions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  task: "",
};

const TodoForm = ({ addTask }) => {
  const [state, setState] = useState({ ...initialState });

  const onChange = (e) => {
    const { name, value } = e.target; //task
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTask({ task: state.task, id: uuidv4() });
    setState({
      task: "",
    });
  };

  return (
    <div>
      <h2>Tasks Form</h2>
      <form onSubmit={onSubmit}>
        <input type='text' name='task' onChange={onChange} value={state.task} />
        <button type='submit'>Add task</button>
      </form>
    </div>
  );
};

export default connect(null, { addTask })(TodoForm);
