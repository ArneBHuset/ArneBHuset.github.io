import { checkingAccessToken } from '../local-storage/validate-access-token.mjs';

/**
 * Sets: Content-Type': 'application/json' without access token
 */
export const UNvalidatedHeader = {
	'Content-Type': 'application/json',
};

const accessToken = await checkingAccessToken();
/**
 * Sets: Content-Type': 'application/json' with access token from local storage
 */
export const validatedHeader = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${accessToken}`,
};
