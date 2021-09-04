import { SET_SEARCH } from "../types";

const initState = "";
export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.payload;

    default:
      return state;
  }
};
