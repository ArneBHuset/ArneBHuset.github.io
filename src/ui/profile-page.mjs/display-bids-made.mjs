import { bidsMadeData } from '../../api-calls/profile/profile-bids.mjs';

/**
 * Takes the json api data from bidsMadeData and populates the profile page with this information
 */
export async function bidsMadeByUser() {
	const bidsMadeByUser = await bidsMadeData();
	const bidsSection = document.getElementById('bidsSection');
	if (bidsMadeByUser && bidsMadeByUser.length > 0) {
		const bidsHtml = bidsMadeByUser
			.map(
				bid => `
    <div class="flex flex-col justify-center border-b-2 border-gray-200 p-4 mt-2 font-secondary font-light">
        <span class="">
            Bid: ${bid.id}
        </span>
        <span class="bg-gray-200 p-1 rounded">
            ${bid.bidderName} bidded <span class="font-semibold">${bid.amount} credits</span>
        </span>
        <span>
            Created: ${new Date(bid.created).toLocaleDateString()} - ${new Date(bid.created).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}
        </span>
    </div>
        `
			)
			.join('');
		bidsSection.innerHTML = bidsHtml;
	} else {
		bidsSection.innerHTML = '<span class="text-primary text-thin pl-3">No bids made by this user.</span>';
	}
}
