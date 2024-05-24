const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const membership = document.querySelector("#membership")


hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#262112";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#F5F5DC";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

const members = fetch("data/members.json").then((response) => {
	return response.json();
});
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.remove("list");
	display.classList.add("grid");
});
listbutton.addEventListener("click", () => {
	display.classList.remove("grid");
	display.classList.add("list");
})

function displayData()
{
	console.log(members);
}

displayData();