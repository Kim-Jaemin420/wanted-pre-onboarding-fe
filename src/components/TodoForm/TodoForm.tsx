import React from 'react';
import styles from './todoForm.module.scss';

const { formWrapper } = styles;

function TodoForm() {
  return (
    <form action="" className={formWrapper}>
      <fieldset>
        <legend className="a11yHidden">Add Todo</legend>
        <input type="text" placeholder="today's todo" />
        <input type="submit" value="추가" />
      </fieldset>
    </form>
  );
}

export default TodoForm;
