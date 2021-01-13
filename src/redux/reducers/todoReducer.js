import {
  ADDTASK,
  REMOVETASK,
  SETFILTERVALUE,
} from "../constants/todoConstants";

const initialState = {
  tasks: [],
  filter: "",
};

const todoReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADDTASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVETASK:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };
    case SETFILTERVALUE:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
