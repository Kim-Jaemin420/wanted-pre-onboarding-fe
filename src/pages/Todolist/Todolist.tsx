import React, { useEffect, useState } from 'react';
import { getTodos } from '../../api';
import { TodoForm, TodoItem } from '../../components';
import { Todo } from '../../types';
import styles from './todolist.module.scss';

const { wrapper, todoList } = styles;

function Todolist() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getTodos();
        setTodos(data);
        console.log(data);
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
        <TodoForm setTodos={setTodos} />
        <ul className={todoList}>
          {todos.map(({ todo, id, isCompleted }) => (
            <TodoItem key={id} id={id} todoContent={todo} isCompleted={isCompleted} todos={todos} setTodos={setTodos} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
