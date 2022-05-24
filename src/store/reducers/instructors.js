import * as at from "../actions/actionTypes";

// REDUCER;
const allInstructors = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_INSTRUCTORS:
      return action.payload;
    case at.ADD_COURSE:
      return [...state, action.payload];
    case at.DELETE_INSTRUCTOR:
      return state.filter(instructor => instructor.id!==action.payload);
    default:
      return state;
  }
};

export default allInstructors;