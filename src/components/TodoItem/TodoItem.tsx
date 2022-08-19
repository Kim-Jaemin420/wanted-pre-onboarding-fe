import React from 'react';
import styles from './todoItem.module.scss';

const { todoItem, todoContent } = styles;

function TodoItem() {
  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  return (
    <li className={todoItem}>
      <input
        type="checkbox"
        name="complete"
        id="complete"
        className="a11yHidden"
        checked={true}
        onChange={handleChangeCheckbox}
      />
      <label htmlFor="complete">
        <span className={todoContent}>javacriptjavacripjavacriptjavacrip</span>
      </label>
      <button>delete</button>
    </li>
  );
}

export default TodoItem;
