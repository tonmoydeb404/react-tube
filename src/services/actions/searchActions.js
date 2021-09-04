import { SET_SEARCH } from "../types";

export const setSearch = (text) => {
  return {
    type: SET_SEARCH,
    payload: text,
  };
};
