// console.log('hello world');

var cityInput = document.getElementById("cityInput");
var submitBtn = document.getElementById("submitBtn");
var cityName = document.getElementById("cityName");
var description = document.getElementById("description");
var temperature = document.getElementById("temp");
var windSpeed = document.getElementById("wind");

const apiKey = "9730899b98676a08f873897912629ae1";

// convert temprature
function convertToCel(value){
    return(value-273) .toFixed(1);
};



async function GetWeather() {
    var weatherResult = await (
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
  ${cityInput.value}&appid=${apiKey}`)
    ).json();

    setInfo(weatherResult);
}

function setInfo(data) {
    var cityNamee = data['name'];
    var descriptioon = data['weather'][0]['description'];
    var temp = data['main']['temp'];
    var wind = data['wind']['speed'];

    // set innerHTML
    cityName.innerHTML = `C I T Y &nbsp N A M E : ${cityNamee}`;
    description.innerHTML=`D E S C R I P T I O N : ${descriptioon}`;
    temperature.innerHTML= `T E M P R A T U R E : ${convertToCel(temp)}`;
    windSpeed.innerHTML=`W I N D E &nbsp; S P E E D : ${wind}`;
}




submitBtn.addEventListener('click', GetWeather);