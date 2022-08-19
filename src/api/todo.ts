import { TODOS_PAGE } from '../consts';
import { Todo } from '../types';
import http from './base';

export const getTodos = () => {
  return http.get({
    url: TODOS_PAGE,
  });
};

export const createTodo = ({ todo }: Partial<Todo>) => {
  return http.post({
    url: TODOS_PAGE,
    data: { todo },
  });
};

export const updateTodo = ({ id, todo, isCompleted }: Todo) => {
  return http.put({
    url: `${TODOS_PAGE}/${id}`,
    data: { todo, isCompleted },
  });
};

export const deleteTodo = ({ id }: Todo) => {
  return http.delete({
    url: `${TODOS_PAGE}/${id}`,
  });
};
