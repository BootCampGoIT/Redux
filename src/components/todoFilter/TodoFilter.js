import React from "react";
import { getFilterValue } from "../../redux/actions/todoActions";
import { connect } from "react-redux";

const Filter = ({ filter, getFilter }) => {
  const onHandleChange = (e) => {
    getFilter(e.target.value);
  };

  return (
    <div>
      <h2>Filter: </h2>
      <input type='text' onChange={onHandleChange} value={filter} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFilter: (value) => {
            dispatch(getFilterValue(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
