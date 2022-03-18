const WEATHER_API_KEY = "2ea1836dd69d5368398b257e49c30875";
const WEATEHR_URL = "https://api.openweathermap.org/data/2.5/weather";
const weather = document.querySelector("#weather");
const weather_img = document.querySelector("#weather_img");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `${WEATEHR_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

  console.log(url)
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather_temp = String(data.main.temp).split('.');
      const weather_today = data.weather[0].main;
      if(weather_today === "clouds") {
        weather_img.src = `img/weather/clouds.png`;
      }
      else if(weather_today === "rain") {
        weather_img.src = `img/weather/rain.png`;
      }
      else if(weather_today === "snow") {
        weather_img.src = `img/weather/snow.png`;
      }
      else if(weather_today === "wind") {
        weather_img.src = `img/weather/wind.png`;
      }
      else {
        weather_img.src = `img/weather/clear.png`;
      }
      weather.innerText = `${weather_temp[0]}℃`;
  });
}

function onGeoError() {
  weather.innerText = `Check Internet Connection`;
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
console.log("Weather Success");