//const myTown = document.querySelector('#town');
const myGraphic = document.querySelector('#graphic');
const myDesc = document.querySelector('#desc');
const myTemp = document.querySelector('#temp');

const API_KEY = "2c9d13dfcf07ab449e17e85bfb5831b4";
const myLat = "43.3811755239993";
const myLong = "-112.12299970637176";


const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${API_KEY}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    //myTown.innerHTML = data.name;
    myGraphic.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    myDesc.innerHTML = data.weather[0].description;
    myTemp.innerHTML = `${data.main.temp.toFixed(0)}°F`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    myGraphic.setAttribute('src', iconSrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}

apiFetch();