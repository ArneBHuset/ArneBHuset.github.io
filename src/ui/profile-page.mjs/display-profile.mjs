import { fetchProfileData } from '../../api-calls/profile/profile-data.mjs';
import { userUpdatesProfilePicture } from './update-picture.mjs';

export async function displayProfileData() {
  const filteredProfileData = await fetchProfileData();

  // Assuming filteredProfileData returns only one profile for simplicity.
  const profile = Array.isArray(filteredProfileData)
    ? filteredProfileData[0]
    : filteredProfileData;
  const profileSection = document.getElementById('profileSection');

  // Check if profile data exists
  if (profile) {
    const winsHtml = profile.wins.map(win => `<li>${win}</li>`).join('');

    const profileHtml = `
    <div class="container mx-auto text-center">
    <h1 class="text-2xl font-bold my-5">Your Profile</h1>
    <div class="flex flex-col md:flex-row justify-center items-center gap-8 m-6">
    <div class="relative rounded-full overflow-hidden w-56 h-56 flex justify-center items-center p-0">
    <button id="updateModalBtn" class="absolute inset-0 z-10">
        <!-- This ensures the button covers the whole area for accessibility but remains invisible -->
    </button>
    <img src="${profile.avatar}" class="transition-transform duration-300 ease-in-out hover:scale-110 w-full h-full object-cover rounded-full" alt="${profile.name}'s avatar"/>
    <span class="material-symbols-outlined absolute bottom-5 right-5 mb-2 mr-2 text-black bg-secondary1 bg-opacity-60 rounded-full p-1 cursor-pointer z-100">
    edit
    </span>
</div>

        <div class="hidden sm:flex flex-col gap-4">
            <div>
                <div class="font-bold">Name:</div>
                <div>${profile.name}</div>
            </div>
            <div>
                <div class="font-bold">Email:</div>
                <div>${profile.email}</div>
            </div>
            <div>
                <div class="font-bold">Credits:</div>
                <div>${profile.credits}</div>
            </div>
            <div>
                <div class="font-bold">Wins:</div>
                <ul class="list-disc list-inside">${winsHtml}</ul>
            </div>
        </div>
    </div>
</div>

        `;

    // Set the innerHTML of the profile section to the generated profileHtml
    profileSection.innerHTML = profileHtml;

    // Call function to allow profile picture updates
    userUpdatesProfilePicture();
  }
}
