import { sideMenuList } from '../containers/NavBar/SampleSideMenuData.jsx';

export const LIST_SIDE_MENU = 'LIST_SIDE_MENU';
export const UPDATE_SIDE_MENU = 'UPDATE_SIDE_MENU';

export const getSideMenuList = () => {
  return {
    type: LIST_SIDE_MENU,
    sideMenuList: sideMenuList,
    sideMenuListClone: sideMenuList,
  };
};

export const updateSideMenuList = sideMenuList => {
  return {
    type: UPDATE_SIDE_MENU,
    sideMenuList: sideMenuList,
  };
};
