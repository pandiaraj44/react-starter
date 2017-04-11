export const LIST_TASK = 'LIST_TASK';

export const getTaskList = () => {
  return {
    type: LIST_TASK,
    taskList: ['Task 1', 'Task 2'],
  };
};
