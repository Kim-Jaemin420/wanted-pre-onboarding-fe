import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TODO_PAGE } from '../../consts';
import { validateEmailCondition, validatePasswordCondition } from '../../utils';
import styles from './signin.module.scss';

const { wrapper } = styles;

function Signin() {
  const navigate = useNavigate();

  const handleSubmitForm = (event: React.FormEvent) => {
    console.log(event);

    event.preventDefault();

    navigate(TODO_PAGE);
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    let isSubmitDisabled = false;
    const { emailField, passwordField, submitField } = event.currentTarget;
    const email = emailField.value;
    const password = passwordField.value;

    if (!validateEmailCondition(email) || !validatePasswordCondition(password)) {
      isSubmitDisabled = true;
    }

    submitField.disabled = isSubmitDisabled;
  };

  return (
    <div className={wrapper}>
      <form onSubmit={handleSubmitForm} onChange={handleChangeForm}>
        <fieldset>
          <legend>Sign in</legend>
          <label htmlFor="email">ID</label>
          <input type="email" name="emailField" id="" placeholder="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="passwordField" id="" placeholder="password" />
          <input type="submit" name="submitField" value="sign in" disabled />
        </fieldset>
      </form>
    </div>
  );
}

export default Signin;
