export async function contrastSwitch() {
  document
    .getElementById('toggleHighContrast')
    .addEventListener('click', function () {
      let link = document.getElementById('mainStylesheet');
      let href = link.getAttribute('href');

      if (href.includes('output-high-contrast.css')) {
        link.setAttribute('href', './dist/output.css');
      } else {
        link.setAttribute('href', './dist/output-high-contrast.css');
      }
    });
}
