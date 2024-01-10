import { DECREMENT_COUNT, INCREMENT_COUNT } from "./CountTypes";

export const incrementCount = () => {
  console.log("First incrementCount")
  return {
    type: INCREMENT_COUNT,
  };
};

export const decrementCount = () => {
    return {
        type: DECREMENT_COUNT
    }
}

