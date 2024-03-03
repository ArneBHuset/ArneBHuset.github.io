/**
 * Takes the userName of the user, set there from the login
 * @returns {ReturnType} - reurns single string of user's name
 */
export async function currentProfileName() {
  const userName = localStorage.getItem('userName');

  if (userName) {
    return userName;
  } else {
    console.log('User not logged in');
  }
}
