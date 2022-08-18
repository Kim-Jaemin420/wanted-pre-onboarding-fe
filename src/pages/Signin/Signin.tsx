import React from 'react';
import styles from './signin.module.scss';

const { wrapper } = styles;

function Signin() {
  return (
    <div className={wrapper}>
      <form action="">
        <fieldset>
          <legend>Sign in</legend>
          <label htmlFor="email">ID</label>
          <input type="email" name="email" id="" placeholder="email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" placeholder="password" />
          <input type="submit" value="sign in" />
        </fieldset>
      </form>
    </div>
  );
}

export default Signin;
