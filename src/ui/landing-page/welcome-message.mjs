/**
 * Displays welcome message, using the user name if the user name is avilable in local storage
 */
export function userWelcomeMessage() {
	const userName = localStorage.getItem('userName');
	const welcomeMessage = document.getElementById('WelcomeMessage');
	if (userName) {
		welcomeMessage.innerHTML = `<h2 class="text-3xl font-semibold text-gray-800 md:text-4xl ">Welcome back<span class="text-secondary1"> ${userName}</span>!</h2>`;
	} else {
		welcomeMessage.innerHTML = `
        <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
             Welcome to 
             <span class="text-secondary1">
             Auctionable
             </span>
        </h2>
        `;
	}
}
