import { DECREMENT_COUNT, INCREMENT_COUNT } from "./CountTypes";

const intialState = {
  count: 20,
};

const counterReducer = (state = intialState, actions) => {
  console.log("actions",actions)
  switch (actions.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
