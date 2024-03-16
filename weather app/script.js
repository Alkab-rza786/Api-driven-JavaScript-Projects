
const apiKey = "662eb055713950b5b660a1ea527a882b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.getElementById("input");
const searchButton = document.querySelector(".img");
const condtionImage = document.getElementById("condition");

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

    if (response.status == 404) {
        alert("Invalid City Name\nTry again");
    }

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity p").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind p").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clear") {
        condtionImage.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Clouds") {
        condtionImage.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        condtionImage.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Rain") {
        condtionImage.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Mist") {
        condtionImage.src = "images/mist.png"
    }

}

searchButton.addEventListener("click", () => {
    checkWeather(input.value);
})
