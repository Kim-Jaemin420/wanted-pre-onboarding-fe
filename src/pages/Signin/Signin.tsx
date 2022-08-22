import { AxiosError } from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../api';
import { ACCESS_TOKEN, TODO_PAGE } from '../../consts';
import { setLocalStorage, validateEmailCondition, validatePasswordCondition } from '../../utils';
import styles from './signin.module.scss';

const { wrapper } = styles;

function Signin() {
  const navigate = useNavigate();

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event);

    event.preventDefault();

    const { emailField, passwordField } = event.currentTarget;
    const email = emailField.value;
    const password = passwordField.value;

    try {
      const { data } = await signin({ email, password });

      setLocalStorage(ACCESS_TOKEN, data.access_token);

      navigate(TODO_PAGE);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response);
      }
    }
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
