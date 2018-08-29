function WeatherController(){
	var wc = this
	var weatherService = new WeatherService()
	
	weatherService.getWeather(function(weather){

		fTemp = Math.round(weather.main.temp * 9/5 - 459.67)
		cTemp = Math.round(weather.main.temp - 273.15)

		for(var i = 0; i < weather.weather.length; i++) {
		var wArr = weather.weather[i]
	}
			template = `
			
			<h5>${fTemp}&degF/${cTemp}&degC</h5>
			<img src="http://openweathermap.org/img/w/${wArr.icon}.png">
			<h5> ${wArr.description}</h5>
			<h5>City: ${weather.name}</h5>
		`

document.getElementById('weather').innerHTML = template
	})

}
