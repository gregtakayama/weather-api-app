// Initialize Weather Object

const weather = new Weather('Tokyo')

const ui = new Ui();

// Make weather API call on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Listen for change location submit
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const city = document.getElementById('city')
  if (city.value === '') {
    document.querySelector('.modal-footer').prepend('Please enter a city')
  } else {
    weather.changeLocation(city.value.replace(" ", '%20'));
    getWeather();
    $('#locModal').modal('hide') //jQuery
  }
})

// Get and set weather by current location
document.getElementById('get-location').addEventListener('click', (e) => {
  navigator.geolocation.getCurrentPosition((position) => {
    weather.setLatLon(position.coords.latitude, position.coords.longitude)
    weather.getWeatherLatLon()
    .then(results => {
      ui.paint(results)
      $('#locModal').modal('hide') //jQuery
    })
    .catch(err => console.log(err))
  })
})

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results)
      console.log(results);
    })
    .catch(err => console.log(err));
}
