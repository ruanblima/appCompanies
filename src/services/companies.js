import request from './request';

import {ENTERPRISES} from '~/constants/api';

export async function listEnterprises(accessToken, client, uid) {
  const response = await request.get(
    ENTERPRISES,
    null,
    accessToken,
    client,
    uid,
  );

  return response;
}

export async function getEnterprises(accessToken, client, uid, id) {
  const response = await request.get(
    ENTERPRISES,
    null,
    accessToken,
    client,
    uid,
    id,
  );

  return response;
}

export async function listEnterprisesPerTypes(
  accessToken,
  client,
  uid,
  idType,
  nameType,
) {
  const response = await request.get(
    ENTERPRISES,
    {enterprise_types: idType, name: nameType},
    accessToken,
    client,
    uid,
  );

  return response;
}
