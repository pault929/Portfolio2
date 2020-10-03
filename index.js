// / var todo = "Orlando";

$.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=5128581&APPID=411910c4c4abb733221242b4d25a13f1&units=imperial", function(data){

console.log(data);

// var icon ="http://openweathermap.org/img/wn/10d@2x.png";
var icon ="http://api.openweathermap.org/data/2.5/forecast?q=5128581&APPID=411910c4c4abb733221242b4d25a13f1&units=imperial";




var date = newDate();
  document.getElementById("datetime").innerHtml = date.toLocaleString();

});


const key = '';
if(key == '') document.getElementById('temp').innerHTML = ('411910c4c4abb733221242b4d25a13f1');

function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + 5128581 + '&appid=' + '411910c4c4abb733221242b4d25a13f1')  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description; 
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  
  
//   document.getElementById('description2').innerHTML = description;
// 	document.getElementById('temp2').innerHTML = celcius + '&deg;';
// 	document.getElementById('location2').innerHTML = d.name;
  
  
//   document.getElementById('description3').innerHTML = description;
// 	document.getElementById('temp3').innerHTML = celcius + '&deg;';
// 	document.getElementById('location3').innerHTML = d.name;
  
  
//   document.getElementById('description4').innerHTML = description;
// 	document.getElementById('temp4').innerHTML = celcius + '&deg;';
// 	document.getElementById('location4').innerHTML = d.name;
  
  
  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}
window.onload = function() {
	weatherBallon( 6167865 );
}

