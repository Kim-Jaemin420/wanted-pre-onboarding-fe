import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TODO_PAGE } from '../../consts';
import styles from './signin.module.scss';

const { wrapper } = styles;

function Signin() {
  const navigate = useNavigate();

  const validateEmailCondition = (email: string) => {
    const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (EMAIL_REGEX.test(email)) {
      return true;
    }
    return false;
  };

  const validatePasswordCondition = (password: string) => {
    const PASSWORD_MINIMUM_LENGTH = 8;

    if (password.length >= PASSWORD_MINIMUM_LENGTH) {
      return true;
    }
    return false;
  };

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
