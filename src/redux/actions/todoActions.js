import { ADDTASK, REMOVETASK, SETFILTERVALUE } from "../constants/todoConstants";

const addTask = (task) => {
  return {
    type: ADDTASK,
    payload: task,
  };
};

const deleteTask = (id) => {
  return {
    type: REMOVETASK,
    payload: id,
  };
};

const getFilterValue = (value) => {
  return {
    type: SETFILTERVALUE,
    payload: value,
  };
};

export { addTask, deleteTask, getFilterValue };
