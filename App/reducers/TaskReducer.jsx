export const LIST_TASK = 'LIST_TASK';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LIST_TASK:
      return {
        ...state,
        loading: true,
        list: action.list
      };
    default:
      return state;
  }
}
