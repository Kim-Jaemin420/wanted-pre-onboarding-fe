import { Method } from 'axios';

export const HTTP_METHODS: Record<string, Method> = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  PUT: 'put',
  DELETE: 'delete',
};

export const ACCESS_TOKEN = 'access_token';

export const BASE_URL = 'http://localhost:8000/';
