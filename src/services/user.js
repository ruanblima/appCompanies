import request from './request';

import {AUTH} from '~/constants/api';

export async function authSignIn(email, password) {
  const response = await request.post(AUTH, null, null, {email, password});

  return response;
}
