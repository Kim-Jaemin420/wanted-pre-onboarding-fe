import http from './base';
import { SIGNIN_PAGE, SIGNUP_PAGE } from '../consts';
import { User } from '../types';

export const signup = ({ email, password }: User) => {
  return http.post({
    url: SIGNUP_PAGE,
    data: { email, password },
  });
};

export const signin = ({ email, password }: User) => {
  return http.post({
    url: SIGNIN_PAGE,
    data: { email, password },
  });
};
