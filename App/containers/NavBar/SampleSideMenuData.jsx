export const sideMenuList = [
  {
    id: 1,
    name: 'Home',
    order: 1,
    icon: 'dashboard',
    route: '',
    isActive: true,
  },
  {
    id: 2,
    name: 'Operations',
    order: 2,
    icon: 'assessment',
    children: [
      {
        id: 1,
        name: 'Create Task',
        order: 1,
        icon: 'create',
        route: '/task',
      },
      {
        id: 2,
        name: 'Task List',
        order: 1,
        icon: 'view_list',
      },
    ],
  },
  {
    id: 3,
    name: 'Operations',
    order: 3,
    icon: 'assessment',
    children: [
      {
        id: 1,
        name: 'Create Task',
        order: 1,
        icon: 'create',
        route: '/task',
      },
      {
        id: 2,
        name: 'Task List',
        order: 1,
        icon: 'view_list',
      },
    ],
  },
];
