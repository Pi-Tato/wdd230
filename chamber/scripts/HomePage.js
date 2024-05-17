const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const membership = document.querySelector("#membership")
membership.addEventListener("select", () => {
	switch(membership.value) {
		case "NP Membership":
			document.getElementById("benefits_type").textContent = "NP Membership";
			break;
		case "Bronze Membership":
			document.getElementById("benefits_type").textContent = "Bronze Membership";
			break;
		case "Silver Membership":
			document.getElementById("benefits_type").textContent = "Silver Membership";
			break;
		case "Gold Membership":
			document.getElementById("benefits_type").textContent = "Gold Membership";
			break;
		default: 
			document.getElementById("benefits_type").textContent = "Select a Membership";
	}
});

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

