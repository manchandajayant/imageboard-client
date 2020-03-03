import { JWT, SIGN_UP } from "../actions";

export default function(state = "", action) {
  switch (action.type) {
    case JWT: {
      return action.payload;
    }
    case SIGN_UP: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}
