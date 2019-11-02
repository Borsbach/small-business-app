import { combineReducers } from "redux";

const user = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        username: action.value
      }
      default:
        return state
  }
}

const listings = (state = [], action) => {
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

// const map = (state = [], action) => {
//   fetch
// }

export default combineReducers({ user, listings });