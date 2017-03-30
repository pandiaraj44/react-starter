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
        taskList: action.taskList
      };
    default:
      return state;
  }
}
