import React from 'react';
import styles from './todoItem.module.scss';

const { todoItem } = styles;

function TodoItem() {
  return (
    <li className={todoItem}>
      <input type="checkbox" name="" id="" />
      javacript
      <button>delete</button>
    </li>
  );
}

export default TodoItem;
