// Selectors for input text and button
const searchText = document.getElementById("input-text");
const searchBtn = document.querySelector(".search-button");

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

  // log for debugging (remove for production)
  console.log(data);
  console.log(
    `The tempreture in ${location} is ${data["current"]["temp_c"]}° C`
  );
}
