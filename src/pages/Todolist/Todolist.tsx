import React, { useEffect } from 'react';
import { getTodos } from '../../api';
import { TodoForm, TodoItem } from '../../components';
import styles from './todolist.module.scss';

const { wrapper, todoList } = styles;

function Todolist() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getTodos();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={wrapper}>
      <div>
        <h1>todo</h1>
        <TodoForm />
        <ul className={todoList}>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
