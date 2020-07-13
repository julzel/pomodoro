export const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, counting: true };
    case 'pause':
      return { ...state, counting: false };
    case 'stop':
      return action.payload;
    case 'increment': 
      return { ...state, counter: state.counter + 1 }
    case 'decrement': 
      return { ...state, counter: state.counter - 1 }
    default:
      throw new Error();
  }
};