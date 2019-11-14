class Weather {
  constructor(city, lat, lon) {
    this.apiKey = 'YOUR-API-KEY-HERE' //https://home.openweathermap.org/api_keys
    this.city = city
    this.lat = lat
    this.lon = lon
  }

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}
    `)

    const responseData = await response.json();

    return responseData;
  }

  async getWeatherLatLon() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`)

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }

  setLatLon(lat, lon) {
    this.lat = lat
    this.lon = lon
  }
}

