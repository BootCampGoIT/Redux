import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../../redux/actions/todoActions";

const TodoList = ({ tasks, deleteTask }) => {
  const deleteTasksItem = (e) => {
    deleteTask(e.target.id);
  };
  return (
    <div>
      <h2>TASKS:</h2>
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <p>{item.task}</p>
            <button id={item.id} onClick={deleteTasksItem}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.filter((item) =>
      item.task.toLowerCase().includes(state.filter)
    ),
  };
};

export default connect(mapStateToProps, { deleteTask })(TodoList);
