export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const RESET_COUNT = 'RESET_COUNT';

export const increment = () => {
  return {
    type: INCREMENT_COUNT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT_COUNT,
  };
};

export const reset = () => {
  return {
    type: RESET_COUNT,
  };
};
