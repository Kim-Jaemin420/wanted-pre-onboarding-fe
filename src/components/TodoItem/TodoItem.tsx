import { AxiosError } from 'axios';
import React, { Dispatch, SetStateAction, useState, useRef } from 'react';
import { deleteTodo, updateTodo } from '../../api';
import { Todo } from '../../types';
import styles from './todoItem.module.scss';

const { todoItem, modifyForm, completeTodo, checkboxLabel, checkedLabel, modifyInput } = styles;
interface Props {
  id: number;
  todoContent: string;
  isCompleted: boolean;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

function TodoItem({ todoContent, id, isCompleted, todos, setTodos }: Props) {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const [isTodoCompleted, setIsTodoCompleted] = useState(isCompleted);
  const [isTodoInputFocused, setIsTodoInputFocused] = useState(true);

  const handleChangeCheckbox = async () => {
    try {
      const { data } = await updateTodo({ id, todo: todoContent, isCompleted: !isCompleted });

      setIsTodoCompleted(!isTodoCompleted);
      setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
      }
    }
  };

  const handleClickDeleteButton = async () => {
    try {
      await deleteTodo({ id });
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
      }
    }
  };

  const handleSubmitForm = async () => {
    try {
      await updateTodo({ id, todo: todoInputRef.current?.value, isCompleted });
      alert('수정이 완료되었습니다.');
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        alert('수정이 실패하였습니다.');
      }
    }
  };

  const handleClickSubmitInput = () => {
    setIsTodoInputFocused((_isTodoInputFocused) => !_isTodoInputFocused);

    if (isTodoInputFocused) {
      todoInputRef.current?.focus();
    }
    if (!isTodoInputFocused) {
      todoInputRef.current?.blur();
      handleSubmitForm();
    }
  };

  return (
    <li className={todoItem} key={id}>
      <label htmlFor={`${id} complete`} className={isTodoCompleted ? checkboxLabel : checkedLabel}>
        <input
          type="checkbox"
          name="complete"
          id={`${id} complete`}
          className="a11yHidden"
          checked={isTodoCompleted}
          onChange={handleChangeCheckbox}
        />
      </label>

      <form onSubmit={(event) => event.preventDefault()} className={modifyForm}>
        <input
          ref={todoInputRef}
          type="text"
          defaultValue={todoContent}
          className={isTodoCompleted ? modifyInput : completeTodo}
        />
        <input type="submit" value={isTodoInputFocused ? 'modify' : 'submit'} onClick={handleClickSubmitInput} />
      </form>

      <button type="button" onClick={handleClickDeleteButton}>
        delete
      </button>
    </li>
  );
}

export default TodoItem;
