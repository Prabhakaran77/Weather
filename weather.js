
var city;
const URL='http://api.openweathermap.org/data/2.5/weather?q=';
const API='&APPID=f88d1d041bd5e3282a2d263b47e427a8';
var data;

function getWeather()
{
   city=document.getElementById('cityname').value;
   var url=URL+city+API;    
    var xhr = new XMLHttpRequest;
    xhr.open('GET',url, true)
    
    xhr.onload = function() 
        {
            if (this.readyState==4&&this.status === 200) 
                {
                    data=JSON.parse(this.responseText);
                   console.log(data);
                   document.getElementById('temp_display').value=data.main.temp;
                   document.getElementById('humidity_display').value=data.main.humidity;
                   document.getElementById('max_temp_display').value=data.main.temp_max;
                   document.getElementById('min_temp_display').value=data.main.temp_min;
                   document.getElementById('weather_display').value=data.weather[0].main;
                }
            else
                {
                    alert("enter valid city name");
                }
        }
    xhr.send();
}
