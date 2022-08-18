import React from 'react';
import styles from './todoForm.module.scss';

const { formWrapper } = styles;

function TodoForm() {
  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    let isSubmitDisabed = false;
    const { todoField, submitField } = event.currentTarget;
    console.log(todoField, submitField);

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
