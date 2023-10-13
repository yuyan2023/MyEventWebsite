async function search() {
const searchQuery = document.getElementById("searchQuery").value;
const url = `https://google-search74.p.rapidapi.com/?query=${searchQuery}&limit=10&related_keywords=true`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a338b86333msh0ac563539d576f6p1d643bjsn80e803aa3ee7',
		'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	document.getElementById("result").textContent = JSON.stringify(result);

} catch (error) {
	console.error(error);
}}