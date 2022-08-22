import { AxiosError } from 'axios';
import React, { Dispatch, SetStateAction } from 'react';
import { createTodo } from '../../api';
import { Todo } from '../../types';
import styles from './todoForm.module.scss';

const { formWrapper } = styles;

interface Props {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

function TodoForm({ setTodos }: Props) {
  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { todoField } = event.currentTarget;
    const content: string = todoField.value;

    try {
      const { data: todo } = await createTodo({ todo: content });

      setTodos((todos) => [...todos, todo]);
      todoField.value = '';
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
