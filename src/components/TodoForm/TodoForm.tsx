import { AxiosError } from 'axios';
import React from 'react';
import { createTodo } from '../../api';
import { Todo } from '../../types';
import styles from './todoForm.module.scss';

const { formWrapper } = styles;

function TodoForm() {
  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { todoField } = event.currentTarget;
    const todo: string = todoField.value;

    try {
      const { data } = await createTodo({ todo });
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response);
      }
    }
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    let isSubmitDisabed = false;
    const { todoField, submitField } = event.currentTarget;

    if (!todoField.value) {
      isSubmitDisabed = true;
    }

    submitField.disabled = isSubmitDisabed;
  };

  return (
    <form className={formWrapper} onSubmit={handleSubmitForm} onChange={handleChangeForm}>
      <fieldset>
        <legend className="a11yHidden">Add Todo</legend>
        <input type="text" name="todoField" placeholder="today's todo" />
        <input type="submit" name="submitField" value="ADD" disabled />
      </fieldset>
    </form>
  );
}

export default TodoForm;
