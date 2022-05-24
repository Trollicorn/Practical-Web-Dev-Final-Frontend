import { FETCH_INSTRUCTOR, DELETE_INSTRUCTOR } from "../actions/actionTypes";

const initialState = {
  courses: [],
};

const instructor = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INSTRUCTOR:
      return action.payload;
    case DELETE_INSTRUCTOR:
      return action.payload;
    default:
      return state;
  }
};

export default instructor;