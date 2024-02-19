export function currentActiveFilter() {
  const activeFilterInput = document.getElementById('activeFilterInput');
  return activeFilterInput.checked; // true for checked, false for unchecked
}
