export const LIST_TASK = 'LIST_TASK';

export const getTaskList = () => {
  return {
    type: LIST_TASK,
    list: ['Task 1', 'Task 2']
  }
}
