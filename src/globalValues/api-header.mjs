import { checkingAccessToken } from '../access-token/validate-access-token.mjs';

export const UNvalidatedHeader = {
  'Content-Type': 'application/json',
};

const accessToken = await checkingAccessToken();

export const validatedHeader = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${accessToken}`,
};
