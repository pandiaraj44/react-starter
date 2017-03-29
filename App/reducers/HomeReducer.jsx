export const LIST_COUNTRY = 'LIST_COUNTRY';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LIST_COUNTRY:      
      return {
        ...state,
        loading: true,
        list: action.list,
      };
    default:
      return state;
  }
}
