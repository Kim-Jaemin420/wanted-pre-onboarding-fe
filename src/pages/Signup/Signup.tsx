import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGNIN_PAGE } from '../../consts';
import { validateEmailCondition, validatePasswordCondition } from '../../utils';
import styles from './signup.module.scss';

const { wrapper } = styles;

function Signup() {
  const navigate = useNavigate();

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();

    navigate(SIGNIN_PAGE);
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    let isSubmitDisabled = false;
    const { emailField, passwordField, passwordConfirmField, submitField } = event.currentTarget;
    const email = emailField.value;
    const password = passwordField.value;
    const passwordConfirm = passwordConfirmField.value;

    if (
      !validateEmailCondition(email) ||
      !validatePasswordCondition(password) ||
      !validatePasswordCondition(passwordConfirm) ||
      password !== passwordConfirm
    ) {
      isSubmitDisabled = true;
    }

    submitField.disabled = isSubmitDisabled;
  };

  return (
    <div className={wrapper}>
      <form onSubmit={handleSubmitForm} onChange={handleChangeForm}>
        <fieldset>
          <legend>Sign up</legend>
          <label htmlFor="email">ID</label>
          <input type="email" name="emailField" id="" placeholder="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="passwordField" id="" placeholder="password" />
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <input type="password" name="passwordConfirmField" id="" placeholder="password confirm" />
          <input type="submit" name="submitField" value="sign up" disabled />
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
