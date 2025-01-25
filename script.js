// Selectors for input text and button
const searchText = document.getElementById("input-text");
const searchBtn = document.querySelector(".search-button");
const tempSelector = document.querySelector(".temperature");
const locationSelector = document.querySelector(".location-text");
const windSelector = document.getElementById("wind");
const humiditySelector = document.getElementById("humidity");

searchBtn.addEventListener("click", function () {
  locationValue = searchText.value;
  getWeather(locationValue);
});

async function getWeather(location) {
  const apiKey = "8bc02abef81a414499c180242252401";
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  if (!location) {
    console.log(`NO LOCATION "${location}" FOUND `);
    return;
  }
  // Make the request
  const response = await fetch(apiUrl);
  const data = await response.json();
  const { temp_c: temp, wind_kph: wind, humidity } = data.current;
  tempSelector.textContent = `${temp}°C`;
  locationSelector.textContent = data.location.name;
  windSelector.textContent = `${wind} km/h`;
  humiditySelector.textContent = `${humidity} %`;

  // log for debugging (remove for production)
  console.log(data);
  console.log(`The temperature in ${location} is ${temp}° C`);
}
