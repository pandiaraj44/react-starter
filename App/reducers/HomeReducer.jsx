export const LOAD_COUNTRY = 'LOAD_COUNTRY';
export const LOAD_COUNTRY_SUCCESS = 'LOAD_COUNTRY_SUCCESS';
export const LOAD_COUNTRY_FAILURE = 'LOAD_COUNTRY_FAILURE';
export const LIST_COUNTRY = 'LIST_COUNTRY';
export const CLEAR_COUNTRY_LIST = 'CLEAR_COUNTRY_LIST';

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_COUNTRY:
      return {
        ...state,
        loading: true,
      };
    case LOAD_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        list: action.result,
      };
    case LOAD_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    case LIST_COUNTRY:
      return {
        ...state,
        list: action.list,
      };
    case CLEAR_COUNTRY_LIST:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
}
