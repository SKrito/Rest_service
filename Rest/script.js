const form = document.querySelector('form');
const urlInput = document.querySelector('#url');
const shortenedLink = document.querySelector('#shortened-link');

form.addEventListener('submit', async function(e) {
	e.preventDefault();
	const url = urlInput.value;
	const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
	const data = await response.json();
	shortenedLink.innerHTML = `<a href="${data.result.full_short_link}" target="_blank">${data.result.full_short_link}</a>`;
});
