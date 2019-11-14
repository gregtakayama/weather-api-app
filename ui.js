class Ui {
  constructor(params) {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.current = document.getElementById('w-temp');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');

  }

  paint(weather) {
    this.location.textContent = weather.name
    this.description.textContent = toTitleCase(weather.weather[0].description) 
    this.current.innerHTML = `${((weather.main.temp - 273.15) * (9/5) + 32).toFixed(0)}&deg; F`
    this.icon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`
    this.wind.textContent = `${weather.wind.speed.toFixed(0)} MPH`
  }
}

// Converts text to Title Case
function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}