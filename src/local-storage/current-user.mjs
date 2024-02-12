export async function currentProfileName() {
  const userName = localStorage.getItem('userName');

  if (userName) {
    return userName;
  } else {
    console.log('User not logged in');
  }
}
