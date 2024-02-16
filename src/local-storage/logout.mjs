/**
 * Runs logout, takes user to landing page, and removes access token from local storage
 */
export function logOutUser() {
  const logoutBtn = document.getElementById('logOutButton'); // Ensure this ID matches your logout button in HTML
  logoutBtn.addEventListener('click', () => {
    // Remove token and username from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userName');
    window.location.reload(true);
  });
}
