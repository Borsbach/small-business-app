import { combineReducers } from "redux";
import initialState from '../redux/state';

const user = (state = initialState, { type, value }) => {
  switch (type) {
    case "LOGIN":
      console.log(value)
      return {
        ...state,
        user: value
      }
      default:
        return state
  }
}

const authentication = (state = initialState, { type, value }) => {
  switch (type) {
    case "AUTHENTICATE":
      console.log('authentication: ', state)
      return {
        ...state,
        authentication: {
          login: value.boolean, 
        }
      }
      default:
        return state
  }
}

const listings = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "REMOVE_LISTING":
      const listings = [...state];
      listings.splice(action.value, 1);
      return listings;
    default:
      return state;
  }
};

export default combineReducers({ user, listings, authentication });