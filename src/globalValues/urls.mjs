/**
 * Base URL for all API calls to Noroff API Docs version 1
 */
export const API_BASE_URL = `https://api.noroff.dev/api/v1`;
/**
 * URL endpoing for fetching auction listings can be paired with
 * /id -  parameter to get a single listing by its ID
 * /id/bids - endpoint allows creation of a new bid on a listing
 */
export const listingsUrl = `${API_BASE_URL}/auction/listings`;
/**
 * URL endpoint for login api call
 */
export const loginUrl = `${API_BASE_URL}/auction/auth/login`;
/**
 * URL endpoint for registration API call
 */
export const registerUrl = `${API_BASE_URL}/auction/auth/register`;
/**
 * URL endpoint for profiles
 */
export const profileUrl = `${API_BASE_URL}/auction/profiles/testytest`;
