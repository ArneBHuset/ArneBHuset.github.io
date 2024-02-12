export async function newListingData() {
  const listingTitle = document.getElementById('listingTitle');
  const listingDescription = document.getElementById('listingDescription');
  const listingTags = document.getElementById('listingTags');
  const listingMedia = document.getElementById('listingMedia');
  const listingEndsAt = document.getElementById('listingEndsAt');

  // Assuming listingEndsAt.value returns a date in format "YYYY-MM-DD"
  // Create a Date object at 23:59 local time on the selected date
  const localDate = new Date(`${listingEndsAt.value}T23:59:00`);

  // Convert to UTC
  const endsAtDateWithTime = localDate.toISOString(); // Converts to a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ). The timezone is always zero UTC offset, as denoted by the suffix "Z".

  const userListingData = {
    title: listingTitle.value,
    description: listingDescription.value,
    tags: listingTags.value.split(','), // Assuming tags are comma-separated
    media: [listingMedia.value], // Assuming media should be an array
    endsAt: endsAtDateWithTime, // Use the modified date string with time
  };
  return userListingData;
}
