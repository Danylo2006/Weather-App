const searchText = document.getElementById("input-text");
const searchBtn = document.querySelector(".search-button");

searchBtn.addEventListener("click", function () {
  console.log(searchText.value);
});

async function getWeather(location) {
  const apiKey = "8bc02abef81a414499c180242252401";
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  // Make the request
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
}
getWeather("London");
