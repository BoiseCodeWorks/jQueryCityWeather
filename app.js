(function () {

	$('#addCityBtn').on('click', function () {

		var zip = $('#newZipCode').val();

		// get the city & weather data
		// add a city panel to the list		
	});


	function getCity(zip, callback) {
		
		var urlBase = 'http://api.zippopotam.us/us/';
		var url = urlBase + zip;

		// use jQuery get to get the zip code data	
		// transform the data to camelCase proprty names	

	}

	function getWeather(zip, callback) {

		var urlBase = 'http://api.openweathermap.org/data/2.5/';
		var appId = 'bd82255fd0a21fa1238699b9eda2ee35';
		var url = urlBase + 'weather?appid=' + appId + '&units=imperial&zip=' + zip;

		// use jQuery get to get the zip code weather data
	}
})();