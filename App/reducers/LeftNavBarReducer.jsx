export const LIST_SIDE_MENU = 'LIST_SIDE_MENU';
export const UPDATE_SIDE_MENU = 'UPDATE_SIDE_MENU';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LIST_SIDE_MENU:
      return {
        ...state,
        sideMenuList: action.sideMenuList,
        sideMenuListClone: action.sideMenuListClone,
      };
    case UPDATE_SIDE_MENU:
      return {
        ...state,
        sideMenuList: action.sideMenuList,
      };
    default:
      return state;
  }
}
