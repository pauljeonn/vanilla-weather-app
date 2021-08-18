let weather = {
	apiKey: 'db41e830bb3f6bab7224315e1127bdba',
	fetchWeather: function (city) {
		fetch(
			'http://api.openweathermap.org/data/2.5/weather?q=' +
				city +
				'&units=metric&appid=' +
				this.apiKey
		)
			.then((response) => response.json())
			.then((data) => console.log(data));
	},
};
