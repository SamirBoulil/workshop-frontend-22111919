import { createStore } from "redux";

// Store
const START_LOADING_KEY = "START_LOADING";
const STOP_LOADING_KEY = "STOP_LOADING";

const reducer = (state, action): boolean => {
  switch (action.type) {
    case START_LOADING_KEY:
      return true;
    case STOP_LOADING_KEY:
      return false;
    default:
      return state;
  }
};
export const store = createStore(reducer, true);

// Action creators
export const startLoading = { type: START_LOADING_KEY };
export const stopLoading = { type: STOP_LOADING_KEY };

// Selectors
export const getIsLoading = selector => selector(state => state);
