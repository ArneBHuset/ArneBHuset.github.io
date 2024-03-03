import { fetchProfileData } from '../../api-calls/profile/profile-data.mjs';
import { userUpdatesProfilePicture } from '../modal-bodies/update-picture.mjs';
/**
 * Takes the profile json data from fetchProfileData and populates it in into the dom
 */
export async function displayProfileData() {
  const filteredProfileData = await fetchProfileData();
  const profile = Array.isArray(filteredProfileData)
    ? filteredProfileData[0]
    : filteredProfileData;
  const profileSection = document.getElementById('profileSection');
  if (profile) {
    const winsHtml = profile.wins.map(win => `<li>${win}</li>`).join('');
    const profileHtml = `
    <div class="mx-auto flex items-center gap-8">
        <div>
            <h1 class="text-2xl font-bold my-6 text-center">PROFILE</h1>
            <div class="relative rounded-full overflow-hidden  sm:w-56 sm:h-56 h-40 w-40 flex justify-center items-center mx-auto">
                <button id="updateModalBtn" class="absolute inset-0 z-10"></button>
                <img src="${profile.avatar}" class="transition-transform duration-300 ease-in-out hover:scale-110 w-full h-full object-cover rounded-full" alt="${profile.name}'s avatar"/>
                <span class="material-symbols-outlined absolute bottom-2 right-5 mb-2 mr-2 text-white bg-primary2 bg-opacity-80 rounded-full p-1 cursor-pointer" style="z-index: 50;">
                  edit
                </span>
            </div>
        </div>
        <div class="pt-8">
             <div class="flex flex-col gap-4">
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
        `;
    profileSection.innerHTML = profileHtml;
    userUpdatesProfilePicture();
  }
}
