import React from 'react';
import { TodoForm, TodoItem } from '../../components';
import styles from './todolist.module.scss';

const { wrapper } = styles;

function Todolist() {
  return (
    <div className={wrapper}>
      <div>
        <h1>todo</h1>
        <TodoForm />
        <ul>
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
